import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const NewsScreen = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>News screen</Text>
      <Text onPress={() => navigation.goBack()}>Go back</Text>
    </View>
  );
};
