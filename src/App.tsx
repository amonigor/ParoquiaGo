import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenuComponent } from './components/DrawerMenu/DrawerMenuComponent';
import { drawerItemsOptions } from './components/DrawerMenu/DrawerItemsOptions';

import { HomeScreen } from './screens/HomeScreen';
import { NewsScreen } from './screens/NewsScreen';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Drawer = createDrawerNavigator();
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
