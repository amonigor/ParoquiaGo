import React, { useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './GpsRollbackStyle';
import { useAtomValue } from 'jotai';
import { recenterMapAtom } from '../../../atoms/map';

export const GpsRollbackComponent = () => {
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);

  const handleRollback = useCallback(recenterMap, [recenterMap]);

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
