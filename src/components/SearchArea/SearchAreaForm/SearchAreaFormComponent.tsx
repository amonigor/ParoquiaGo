import React, { useCallback, useEffect, useMemo, useState } from 'react';

import type { Church } from '../../../interfaces/church';

import { View, TextInput } from 'react-native';
import { SearchAreaFormResultsComponent } from './SearchAreaFormResultsComponent';

import { useChurches } from '../../../hooks/useChurches';

import { styles } from './SearchAreaFormStyle';

export const SearchAreaFormComponent = () => {
  const [searchText, setSearchText] = useState<string>();
  const { data: churchData, isLoading } = useChurches();
  const churchList = useMemo(() => {
    if (!churchData || isLoading) return [];
    return churchData.data;
  }, [churchData, isLoading]);
  const [filteredList, setFilteredList] = useState<Church[]>(churchList);

  const filterList = useCallback(
    (text: string) => {
      const search = new RegExp(text, 'i');
      setFilteredList(
        churchList.filter(
          church => search.test(church.name) || search.test(church.address),
        ),
      );
    },
    [setFilteredList, churchList],
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!!searchText) filterList(searchText);
      else setFilteredList(churchList);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, filterList, churchList]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Nome ou endereço da paróquia"
        placeholderTextColor="#95B0BB"
      />
      <SearchAreaFormResultsComponent churchList={filteredList} />
    </View>
  );
};
