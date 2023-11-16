import React, { useCallback, useMemo } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import type { Church } from '../../../interfaces/church';

import { useChurches } from '../../../hooks/useChurches';

import { useAtomValue, useSetAtom } from 'jotai';
import { userLocationAtom } from '../../../atoms/map';
import { focusedChurchAtom, isSearchOpenAtom } from '../../../atoms/searchArea';

import { calcDistance } from '../../../utils/location';

import { styles } from './SearchCloserStyle';

export const SearchCloserComponent = () => {
  const userLocation = useAtomValue(userLocationAtom);
  const setFocusedChurch = useSetAtom(focusedChurchAtom);
  const setIsSearchOpen = useSetAtom(isSearchOpenAtom);

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
    setFocusedChurch(church);
    if (!!church) setIsSearchOpen(true);
  }, [findClosestChurch, setFocusedChurch, setIsSearchOpen]);

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={getClosestChurch}
      disabled={isLoading || !churchList.length}>
      <View style={styles.button}>
        {isLoading || !churchList.length ? (
          <Text style={styles.buttonText}>Carregando paróquias...</Text>
        ) : (
          <Text style={styles.buttonText}>Buscar mais próximo</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
