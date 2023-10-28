import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './SearchAreaFormStyle';

export const SearchAreaFormComponent = () => {
  const [searchText, setSearchText] = useState<string>();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Nome ou endereço da paróquia"
      />
    </View>
  );
};
