import React, { useCallback, useMemo } from 'react';

import type { Church } from '../../interfaces/church';

import { ScrollView, Text, View } from 'react-native';
import { ChurchCardComponent } from '../ChurchCard/ChurchCardComponent';

import { useSavedChurches } from '../../hooks/useSavedChurches';
import { useChurches } from '../../hooks/useChurches';

import { useSetAtom } from 'jotai';
import { focusedChurchAtom } from '../../atoms/searchArea';

import { styles } from './SavedChurchesStyle';

export const SavedChurcesComponent = () => {
  const setFocusedChurch = useSetAtom(focusedChurchAtom);
  const { savedChurches } = useSavedChurches();

  const { data: churchData, isLoading } = useChurches();
  const churchList = useMemo(() => {
    if (!churchData || isLoading || !savedChurches) return [];
    return churchData.data.filter(church =>
      savedChurches.find(saved => saved === church.id),
    );
  }, [churchData, isLoading, savedChurches]);

  const setToFocus = useCallback(
    (church: Church) => {
      setFocusedChurch(church);
    },
    [setFocusedChurch],
  );

  return !savedChurches.length ? (
    <Text style={styles.message}>
      Nenhuma paróquia foi adicionada aos favoritos.
    </Text>
  ) : (
    <>
      <Text style={styles.title}>Salvos</Text>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {churchList.map(church => (
            <ChurchCardComponent
              key={church.id}
              church={church}
              small
              onPress={() => setToFocus(church)}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};
