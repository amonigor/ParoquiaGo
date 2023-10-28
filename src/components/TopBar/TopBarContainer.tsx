import React from 'react';

import { View } from 'react-native';
import { MenuButtonComponent } from './MenuButton/MenuButtonComponent';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './TopBarStyle';

export const TopBarContainer = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, top: insets.top }}>
      <MenuButtonComponent />
    </View>
  );
};
