import React, { useCallback } from 'react';

import { styles } from './SearchAreaPanelControlStyle';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { focusedChurchAtom, isSearchOpenAtom } from '../../../atoms/searchArea';
import { recenterMapAtom } from '../../../atoms/map';

export const SearchAreaPanelControlComopnent = () => {
  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom);
  const setFocusedChurch = useSetAtom(focusedChurchAtom);
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);

  const handleOpen = useCallback(() => {
    setIsSearchOpen(true);
    recenterMap(true);
  }, [setIsSearchOpen, recenterMap]);

  const handleClose = useCallback(() => {
    setIsSearchOpen(false);
    setFocusedChurch(undefined);
    recenterMap();
  }, [setIsSearchOpen, recenterMap, setFocusedChurch]);

  return !isSearchOpen ? (
    <TouchableOpacity onPress={handleOpen}>
      <View style={styles.openPanel}>
        <Text style={styles.openPanelText}>Pesquisa avançada</Text>
        <Image
          source={require('../../../assets/images/expand.png')}
          style={styles.panelImage}
        />
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={handleClose}>
      <View style={styles.closePanel}>
        <Image
          source={require('../../../assets/images/close.png')}
          style={styles.panelImage}
        />
      </View>
    </TouchableOpacity>
  );
};
