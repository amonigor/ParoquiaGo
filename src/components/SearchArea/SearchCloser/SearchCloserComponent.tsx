import React, { useCallback, useMemo } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import { useChurches } from '../../../hooks/useChurches';

import { useAtomValue } from 'jotai';
import { recenterMapAtom, userLocationAtom } from '../../../atoms/map';

import { calcDistance } from '../../../utils/location';

import { styles } from './SearchCloserStyle';
import { Church } from '../../../interfaces/church';

export const SearchCloserComponent = () => {
  const userLocation = useAtomValue(userLocationAtom);
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);

  const { data: churchData, isLoading } = useChurches();
  const churchList = useMemo(() => {
    if (!churchData || isLoading) return [];
    return churchData.data;
  }, [churchData, isLoading]);

  const findClosestChurch = useCallback(() => {
    if (!userLocation || !churchList.length) return undefined;

    let closest: Church | undefined;
    let closestDist = -1;
    churchList.forEach(church => {
      const dist = calcDistance(
        userLocation.latitude,
        userLocation.longitude,
        church.coordinates.lat,
        church.coordinates.lng,
      );

      if (closestDist === -1 || dist < closestDist) {
        closestDist = dist;
        closest = church;
      }
    });

    return closest;
  }, [userLocation, churchList]);

  const getClosestChurch = useCallback(() => {
    const church = findClosestChurch();
    if (!!church)
      recenterMap(false, {
        latitude: church.coordinates.lat,
        longitude: church.coordinates.lng,
      });
  }, [findClosestChurch, recenterMap]);

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={getClosestChurch}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Buscar mais próximo</Text>
      </View>
    </TouchableOpacity>
  );
};
