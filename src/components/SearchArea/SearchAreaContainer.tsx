import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GpsStatusComponent } from './GpsStatus/GpsStatusComponent';
import { styles } from './SearchAreaStyle';
import { GpsRollbackComponent } from './GpsRollback/GpsRollbackComponent';
import { useAtomValue } from 'jotai';
import { userLocationAtom } from '../../atoms/map';

export const SearchAreaContainer = () => {
  const userLocation = useAtomValue(userLocationAtom);

  return (
    <View style={styles.container}>
      <View style={styles.rightItems}>
        <GpsStatusComponent />
        {!!userLocation ? <GpsRollbackComponent /> : <></>}
      </View>
      {!!userLocation ? (
        <TouchableOpacity activeOpacity={0.75}>
          <View style={{ ...styles.button, ...styles.withShadows }}>
            <Text style={styles.buttonText}>Buscar mais próximo</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <View style={{ ...styles.searchArea, ...styles.withShadows }}>
        <Text>Placeholder text</Text>
      </View>
    </View>
  );
};
