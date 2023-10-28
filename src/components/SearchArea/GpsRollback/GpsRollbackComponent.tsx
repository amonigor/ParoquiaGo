import React, { useCallback } from 'react';

import { Image, TouchableOpacity, View } from 'react-native';

import { useAtomValue } from 'jotai';
import { recenterMapAtom } from '../../../atoms/map';
import { isSearchOpenAtom } from '../../../atoms/searchArea';

import { styles } from './GpsRollbackStyle';

export const GpsRollbackComponent = () => {
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);
  const isSearchOpen = useAtomValue(isSearchOpenAtom);

  const handleRollback = useCallback(() => {
    recenterMap(isSearchOpen);
  }, [recenterMap, isSearchOpen]);

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
