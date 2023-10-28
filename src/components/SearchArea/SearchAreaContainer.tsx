import React, { useCallback } from 'react';

import { Text, View } from 'react-native';

import { GpsStatusComponent } from './GpsStatus/GpsStatusComponent';
import { GpsRollbackComponent } from './GpsRollback/GpsRollbackComponent';
import { SearchCloserComponent } from './SearchCloser/SearchCloserComponent';

import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { useAtom, useAtomValue } from 'jotai';
import { recenterMapAtom, userLocationAtom } from '../../atoms/map';
import { isSearchOpenAtom } from '../../atoms/searchArea';

import { styles } from './SearchAreaStyle';

export const SearchAreaContainer = () => {
  const userLocation = useAtomValue(userLocationAtom);
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);
  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom);
  const safeArea = useSafeAreaFrame();

  const handleClick = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
    recenterMap(!isSearchOpen);
  }, [isSearchOpen, recenterMap, setIsSearchOpen]);

  return (
    <View style={styles.container}>
      <View style={styles.rightItems}>
        <GpsStatusComponent />
        {!!userLocation ? <GpsRollbackComponent /> : <></>}
      </View>
      {!!userLocation ? <SearchCloserComponent /> : <></>}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.searchArea,
          ...styles.withShadows,
          height: isSearchOpen ? safeArea.height / 2 : 'auto',
        }}>
        <Text onPress={handleClick}>Pesquisa Avançada</Text>
      </View>
    </View>
  );
};
