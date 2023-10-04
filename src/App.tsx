import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

interface UserLocationType {
  latitude: number;
  longitude: number;
}

function App(): JSX.Element {
  const [userLocation, setUserLocation] = useState<UserLocationType>();

  useEffect(() => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
      enableBackgroundLocationUpdates: false,
    });

    Geolocation.requestAuthorization(() => {
      Geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log(userLocation);
        },
        () => {},
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    });
  }, [userLocation, setUserLocation]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          region={{
            latitude: userLocation?.latitude ?? -23.96095,
            longitude: userLocation?.longitude ?? -46.38919,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}>
          {!!userLocation ? (
            <Marker
              title="Você está aqui!"
              coordinate={{
                latitude: userLocation?.latitude,
                longitude: userLocation?.longitude,
              }}
              pinColor="#ffaa00"
              flat={true}
              draggable={false}
            />
          ) : (
            <></>
          )}
        </MapView>
      </View>
    </SafeAreaView>
  );
}

export default App;
