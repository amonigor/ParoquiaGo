import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { MapComponent } from './components/Map/MapComponent';
import { SearchAreaContainer } from './components/SearchArea/SearchAreaContainer';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <MapComponent />
        <SearchAreaContainer />
      </View>
    </SafeAreaView>
  );
};

export default App;
