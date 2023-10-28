import React from 'react';
import { View } from 'react-native';
import { styles } from './TopBarStyle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuButtonComponent } from './MenuButton/MenuButtonComponent';

export const TopBarContainer = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, top: insets.top }}>
      <MenuButtonComponent />
    </View>
  );
};
