import React, { useCallback } from 'react';

import { Image, TouchableOpacity, View } from 'react-native';

import { useSetAtom } from 'jotai';
import { activeAreaAtom } from '../../../atoms/searchArea';

import { styles } from './BookmarksButtonStyle';

export const BookmarksButtonComponent = () => {
  const setActiveArea = useSetAtom(activeAreaAtom);

  const handleOpen = useCallback(() => {
    setActiveArea('saved-churches');
  }, [setActiveArea]);

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={handleOpen}>
      <View style={styles.button}>
        <Image
          source={require('../../../assets/images/bookmark-blue.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};
