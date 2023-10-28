import React from 'react';
import { Text, View } from 'react-native';
import { GpsStatusComponent } from './GpsStatus/GpsStatusComponent';
import { styles } from './SearchAreaStyle';
import { GpsRollbackComponent } from './GpsRollback/GpsRollbackComponent';
import { useAtomValue } from 'jotai';
import { userLocationAtom } from '../../atoms/map';
import { SearchCloserComponent } from './SearchCloser/SearchCloserComponent';

export const SearchAreaContainer = () => {
  const userLocation = useAtomValue(userLocationAtom);

  return (
    <View style={styles.container}>
      <View style={styles.rightItems}>
        <GpsStatusComponent />
        {!!userLocation ? <GpsRollbackComponent /> : <></>}
      </View>
      {!!userLocation ? <SearchCloserComponent /> : <></>}
      <View style={{ ...styles.searchArea, ...styles.withShadows }}>
        <Text>Placeholder text</Text>
      </View>
    </View>
  );
};
