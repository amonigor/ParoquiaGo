import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenuComponent } from './components/DrawerMenu/DrawerMenuComponent';
import { drawerItemsOptions } from './components/DrawerMenu/DrawerItemsOptions';

import { HomeScreen } from './screens/HomeScreen';
import { NewsScreenComponent } from './screens/NewsScreen/NewsScreenComponent';
import { HistoryScreenComponent } from './screens/HistoryScreen/HistoryScreenComponent';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SupportScreenComponent } from './screens/SupportScreen/SupportScreenComponent';

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
            name="Início"
            component={HomeScreen}
            options={drawerItemsOptions}
          />
          <Drawer.Screen
            name="Notícias"
            component={NewsScreenComponent}
            options={drawerItemsOptions}
          />
          <Drawer.Screen
            name="História da diocese"
            component={HistoryScreenComponent}
            options={drawerItemsOptions}
          />
          <Drawer.Screen
            name="Suporte"
            component={SupportScreenComponent}
            options={drawerItemsOptions}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
