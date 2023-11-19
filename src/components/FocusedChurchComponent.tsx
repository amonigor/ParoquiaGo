import React, { useEffect } from 'react';

import { ChurchCardComponent } from './ChurchCard/ChurchCardComponent';

import { useAtomValue } from 'jotai';
import { focusedChurchAtom } from '../atoms/searchArea';
import { recenterMapAtom } from '../atoms/map';

export const FocusedChurchComponent = () => {
  const church = useAtomValue(focusedChurchAtom);
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);

  useEffect(() => {
    if (!church) return;

    recenterMap(true, {
      latitude: church.coordinates.lat,
      longitude: church.coordinates.lng,
    });
  }, [church, recenterMap]);

  return church ? <ChurchCardComponent church={church} /> : <></>;
};
