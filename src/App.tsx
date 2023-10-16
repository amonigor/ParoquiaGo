import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { MapComponent } from './components/Map/MapComponent';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <MapComponent />
      </View>
    </SafeAreaView>
  );
};

export default App;
