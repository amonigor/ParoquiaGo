import React from 'react';

import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './BookmarksButtonStyle';

export const BookmarksButtonComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.75}>
      <View style={styles.button}>
        <Image
          source={require('../../../assets/images/bookmark-blue.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};
