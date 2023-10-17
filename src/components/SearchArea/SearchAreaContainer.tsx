import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './SearchAreaStyle';

export const SearchAreaContainer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
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
