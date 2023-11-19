import React, { useCallback } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './SearchAreaFormResults';
import { ChurchCardComponent } from '../../ChurchCard/ChurchCardComponent';
import { Church } from '../../../interfaces/church';
import { useSetAtom } from 'jotai';
import { focusedChurchAtom } from '../../../atoms/searchArea';

interface SearchAreaFormResultsProps {
  churchList: Church[];
}

export const SearchAreaFormResultsComponent = ({
  churchList,
}: SearchAreaFormResultsProps) => {
  const setFocusedChurch = useSetAtom(focusedChurchAtom);

  const setToFocus = useCallback(
    (church: Church) => {
      setFocusedChurch(church);
    },
    [setFocusedChurch],
  );

  return !churchList ? (
    <Text style={styles.waitMessage}>Aguarde...</Text>
  ) : (
    <View style={styles.container}>
      <Text style={styles.resultCount}>{`${churchList.length} resultado${
        churchList.length === 1 ? '' : 's'
      }`}</Text>
      <ScrollView style={styles.scrollContainer}>
        {!churchList.length ? (
          <Text style={styles.waitMessage}>Aguarde...</Text>
        ) : (
          churchList.map(church => (
            <ChurchCardComponent
              key={church.id}
              church={church}
              onPress={() => setToFocus(church)}
              small
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};
