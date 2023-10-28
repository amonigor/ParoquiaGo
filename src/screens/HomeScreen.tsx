import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapComponent } from '../components/Map/MapComponent';
import { SearchAreaContainer } from '../components/SearchArea/SearchAreaContainer';
import { TopBarContainer } from '../components/TopBar/TopBarContainer';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <MapComponent />
      <TopBarContainer />
      <SearchAreaContainer />
    </View>
  );
};
