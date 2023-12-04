import React, { useCallback } from 'react';

import { Image, TouchableOpacity, View } from 'react-native';

import { useAtomValue, useSetAtom } from 'jotai';
import { recenterMapAtom } from '../../../atoms/map';
import { activeAreaAtom, focusedChurchAtom } from '../../../atoms/searchArea';

import { styles } from './GpsRollbackStyle';

export const GpsRollbackComponent = () => {
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);
  const setActiveArea = useSetAtom(activeAreaAtom);
  const setFocusedChurch = useSetAtom(focusedChurchAtom);

  const handleRollback = useCallback(() => {
    setActiveArea(undefined);
    setFocusedChurch(undefined);
    recenterMap();
  }, [recenterMap, setActiveArea, setFocusedChurch]);

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={handleRollback}>
      <View style={styles.button}>
        <Image
          source={require('../../../assets/images/location-grey.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};
