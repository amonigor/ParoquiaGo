import React from 'react';

import { Image, Text } from 'react-native';

import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { styles } from './DrawerMenuStyle';

export const DrawerMenuComponent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/paroquia-go.png')}
        style={styles.image}
      />
      <DrawerItemList {...props} />
      <Text style={styles.text}>Um aplicativo da Diocese de Santos</Text>
    </DrawerContentScrollView>
  );
};
