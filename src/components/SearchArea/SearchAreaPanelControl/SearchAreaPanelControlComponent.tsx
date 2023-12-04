import React, { useCallback } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { activeAreaAtom, focusedChurchAtom } from '../../../atoms/searchArea';
import { recenterMapAtom } from '../../../atoms/map';

import { styles } from './SearchAreaPanelControlStyle';

export const SearchAreaPanelControlComopnent = () => {
  const [activeArea, setActiveArea] = useAtom(activeAreaAtom);
  const setFocusedChurch = useSetAtom(focusedChurchAtom);
  const { fn: recenterMap } = useAtomValue(recenterMapAtom);

  const handleOpen = useCallback(() => {
    setActiveArea('search-form');
    recenterMap(true);
  }, [setActiveArea, recenterMap]);

  const handleClose = useCallback(() => {
    setActiveArea(undefined);
    setFocusedChurch(undefined);
  }, [setActiveArea, setFocusedChurch]);

  return !activeArea ? (
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
