import React from 'react';

import { View } from 'react-native';

import { GpsStatusComponent } from './GpsStatus/GpsStatusComponent';
import { GpsRollbackComponent } from './GpsRollback/GpsRollbackComponent';
import { SearchCloserComponent } from './SearchCloser/SearchCloserComponent';
import { SearchAreaPanelControlComopnent } from './SearchAreaPanelControl/SearchAreaPanelControlComponent';

import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { useAtomValue } from 'jotai';
import { userLocationAtom } from '../../atoms/map';
import { isSearchOpenAtom } from '../../atoms/searchArea';

import { styles } from './SearchAreaStyle';

export const SearchAreaContainer = () => {
  const userLocation = useAtomValue(userLocationAtom);
  const isSearchOpen = useAtomValue(isSearchOpenAtom);
  const safeArea = useSafeAreaFrame();

  return (
    <View style={styles.container}>
      <View style={styles.rightItems}>
        <GpsStatusComponent />
        {!!userLocation ? <GpsRollbackComponent /> : <></>}
      </View>
      {!!userLocation && !isSearchOpen ? <SearchCloserComponent /> : <></>}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.searchArea,
          ...styles.withShadows,
          height: isSearchOpen ? safeArea.height / 1.75 : 'auto',
        }}>
        <SearchAreaPanelControlComopnent />
      </View>
    </View>
  );
};
