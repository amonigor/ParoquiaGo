import React from 'react';

import { Marker } from 'react-native-maps';

import type { ImageURISource } from 'react-native';

interface MapPinProps {
  latitude: number;
  longitude: number;
  label: string;
  icon: ImageURISource;
  onPress: () => void;
}

export const MapPin = ({
  latitude,
  longitude,
  label,
  icon,
  onPress,
}: MapPinProps) => {
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
      onPress={onPress}
    />
  );
};
