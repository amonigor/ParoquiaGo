import React, { useCallback, useMemo } from 'react';

import type { Church } from '../interfaces/church';

import { MapPin } from '../components/Map/MapPin';

import { useChurches } from './useChurches';
import { useSetAtom } from 'jotai';
import { activeAreaAtom, focusedChurchAtom } from '../atoms/searchArea';

export const useChurchList = () => {
  const setFocusedChurch = useSetAtom(focusedChurchAtom);
  const setActiveArea = useSetAtom(activeAreaAtom);
  const { data: churchData, isLoading } = useChurches();
  const churchList = useMemo(() => {
    if (!churchData || isLoading) return [];
    return churchData.data;
  }, [churchData, isLoading]);

  const openChurch = useCallback(
    (church: Church) => {
      setFocusedChurch(church);
      setActiveArea('search-form');
    },
    [setFocusedChurch, setActiveArea],
  );

  return churchList.map(church => (
    <MapPin
      key={church.id}
      label={church.name}
      latitude={church.coordinates.lat}
      longitude={church.coordinates.lng}
      icon={require('../assets/images/church-pin.png')}
      onPress={() => openChurch(church)}
    />
  ));
};
