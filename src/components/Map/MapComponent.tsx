import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { StyleSheet } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import { MapPin } from './MapPin';

import { useChurches } from '../../hooks/useChurches';

import { useAtom, useSetAtom } from 'jotai';
import { recenterMapAtom, userLocationAtom } from '../../atoms/map';

export const MapComponent = () => {
  const [userLocation, setUserLocation] = useAtom(userLocationAtom);
  const [watchPositionId, setWatchPositionId] = useState<number>(0);
  const setRecenterMap = useSetAtom(recenterMapAtom);
  const mapRef = useRef<MapView>(null);

  const { data: churchData, isLoading } = useChurches();
  const churchList = useMemo(() => {
    if (!churchData || isLoading) return [];
    return churchData.data;
  }, [churchData, isLoading]);

  const getChurchListComponent = (): JSX.Element[] => {
    return churchList.map(church => (
      <MapPin
        key={church.id}
        label={church.name}
        latitude={church.coordinates.lat}
        longitude={church.coordinates.lng}
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
    if (!mapRef.current || !userLocation) return;
    setRecenterMap({
      fn: (hasOffSet, coordinates) => {
        mapRef.current?.animateToRegion({
          latitude: !coordinates
            ? userLocation.latitude - (!!hasOffSet ? 0.0013 : 0)
            : coordinates.latitude,
          longitude: !coordinates
            ? userLocation.longitude
            : coordinates.longitude,
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
