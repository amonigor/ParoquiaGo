import React, { useCallback } from 'react';

import { Image, TouchableOpacity, View } from 'react-native';

import { useAtomValue, useSetAtom } from 'jotai';
import { recenterMapAtom } from '../../../atoms/map';
import { focusedChurchAtom, isSearchOpenAtom } from '../../../atoms/searchArea';

import { styles } from './GpsRollbackStyle';

export const GpsRollbackComponent = () => {
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);
  const setIsSearchOpen = useSetAtom(isSearchOpenAtom);
  const setFocusedChurch = useSetAtom(focusedChurchAtom);

  const handleRollback = useCallback(() => {
    setIsSearchOpen(false);
    setFocusedChurch(undefined);
    recenterMap();
  }, [recenterMap, setIsSearchOpen, setFocusedChurch]);

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
