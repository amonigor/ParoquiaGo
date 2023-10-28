import React from 'react';

import { Marker } from 'react-native-maps';

import type { ImageURISource } from 'react-native';

interface MapPinProps {
  latitude: number;
  longitude: number;
  label: string;
  icon: ImageURISource;
}

export const MapPin = ({ latitude, longitude, label, icon }: MapPinProps) => {
  return (
    <Marker
      title={label}
      coordinate={{
        latitude,
        longitude,
      }}
      icon={icon}
      pinColor="#ffaa00"
      flat={true}
      draggable={false}
    />
  );
};
