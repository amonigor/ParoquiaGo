import React, { type ReactNode } from 'react';

import { StyleSheet, View } from 'react-native';
import { NavigationBarComponent } from '../components/NavigationBar/NavigationBarComponent';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 10,
  },
});

interface GenericScreenProps {
  title: string;
  children?: ReactNode;
}

export const GenericScreen = ({
  title,
  children,
}: GenericScreenProps): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <NavigationBarComponent title={title} />
      {!!children ? children : <></>}
    </View>
  );
};
