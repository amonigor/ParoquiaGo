import Geolocation from '@react-native-community/geolocation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { MapPin } from './MapPin';
import { useAtom, useSetAtom } from 'jotai';
import { recenterMapAtom, userLocationAtom } from '../../atoms/map';

interface ChurchType {
  id: string;
  label: string;
  latitude: number;
  longitude: number;
}

export const MapComponent = () => {
  const [userLocation, setUserLocation] = useAtom(userLocationAtom);
  const [watchPositionId, setWatchPositionId] = useState<number>(0);
  const setRecenterMap = useSetAtom(recenterMapAtom);
  const mapRef = useRef<MapView>(null);

  const churchList: ChurchType[] = [
    {
      id: 'a07dd53e-7382-5443-b841-db84b34051b9',
      label: 'Igreja 1',
      latitude: -23.9606,
      longitude: -46.3887,
    },
    {
      id: '38e383dd-a184-530b-afdc-a75a4c23499d',
      label: 'Igreja 2',
      latitude: -23.9603,
      longitude: -46.3895,
    },
    {
      id: '9e3cab7a-a74a-5ee5-bd80-f8cdfcd9bfde',
      label: 'Igreja 3',
      latitude: -23.9616,
      longitude: -46.3896,
    },
  ];

  const getChurchListComponent = (): JSX.Element[] => {
    return churchList.map(church => (
      <MapPin
        key={church.id}
        label={church.label}
        latitude={church.latitude}
        longitude={church.longitude}
        icon={require('../../assets/images/church-pin.png')}
      />
    ));
  };

  const setGeolocaltionConfig = () => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
      enableBackgroundLocationUpdates: false,
    });
  };

  const watchPosition = useCallback(() => {
    setWatchPositionId(
      Geolocation.watchPosition(
        res => {
          setUserLocation({
            latitude: res.coords.latitude,
            longitude: res.coords.longitude,
          });
        },
        () => {},
        { enableHighAccuracy: true, timeout: 1500, maximumAge: 10000 },
      ),
    );
  }, [setUserLocation]);

  useEffect(() => {
    setGeolocaltionConfig();
    Geolocation.requestAuthorization(watchPosition);

    return () => {
      Geolocation.clearWatch(watchPositionId);
    };
  }, [watchPosition, watchPositionId]);

  useEffect(() => {
    if (!mapRef.current || !userLocation) {
      return;
    }
    setRecenterMap({
      fn: () => {
        mapRef.current?.animateToRegion({
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        });
      },
    });
  }, [setRecenterMap, userLocation]);

  return (
    <MapView
      ref={mapRef}
      style={{ ...StyleSheet.absoluteFillObject }}
      region={{
        latitude: userLocation?.latitude ?? -23.9468,
        longitude: userLocation?.longitude ?? -46.322,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={false}
      showsUserLocation={true}
      loadingEnabled={true}
      showsMyLocationButton={false}
      toolbarEnabled={false}>
      {getChurchListComponent()}
    </MapView>
  );
};
