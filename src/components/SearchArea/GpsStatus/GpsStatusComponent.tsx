import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './GpsStatusStyle';
import { useAtomValue } from 'jotai';
import { userLocationAtom } from '../../../atoms/map';

export const GpsStatusComponent = () => {
  const userLocation = useAtomValue(userLocationAtom);

  return (
    <View style={styles.pill}>
      {!!userLocation ? (
        <Image
          source={require('../../../assets/images/gps-on.png')}
          style={styles.img}
        />
      ) : (
        <Image
          source={require('../../../assets/images/gps-off.png')}
          style={styles.img}
        />
      )}
      <Text style={styles.text}>GPS</Text>
    </View>
  );
};
