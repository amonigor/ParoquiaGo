import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
