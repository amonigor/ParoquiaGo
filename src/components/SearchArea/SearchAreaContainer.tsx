import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GpsStatusComponent } from './GpsStatus/GpsStatusComponent';
import { styles } from './SearchAreaStyle';
import { GpsRollbackComponent } from './GpsRollback/GpsRollbackComponent';

export const SearchAreaContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rightItems}>
        <GpsStatusComponent />
        <GpsRollbackComponent />
      </View>
      <TouchableOpacity activeOpacity={0.75}>
        <View style={{ ...styles.button, ...styles.withShadows }}>
          <Text style={styles.buttonText}>Buscar mais próximo</Text>
        </View>
      </TouchableOpacity>
      <View style={{ ...styles.searchArea, ...styles.withShadows }}>
        <Text>Placeholder text</Text>
      </View>
    </View>
  );
};
