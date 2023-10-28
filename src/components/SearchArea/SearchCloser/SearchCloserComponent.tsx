import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { styles } from './SearchCloserStyle';

export const SearchCloserComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.75}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Buscar mais próximo</Text>
      </View>
    </TouchableOpacity>
  );
};
