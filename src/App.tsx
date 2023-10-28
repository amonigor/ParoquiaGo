import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenuComponent } from './components/DrawerMenu/DrawerMenuComponent';
import { drawerItemsOptions } from './components/DrawerMenu/DrawerItemsOptions';

import { HomeScreen } from './screens/HomeScreen';
import { NewsScreen } from './screens/NewsScreen';

const Drawer = createDrawerNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={DrawerMenuComponent}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={drawerItemsOptions}
        />
        <Drawer.Screen
          name="Notícias"
          component={NewsScreen}
          options={drawerItemsOptions}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
