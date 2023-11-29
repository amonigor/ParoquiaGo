import React from 'react';

import { View, TouchableOpacity, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './NavigationBarStyle';

interface NavigationBarProps {
  title: string;
}

export const NavigationBarComponent = ({
  title,
}: NavigationBarProps): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.75}>
          <Image
            source={require('../../assets/images/back.png')}
            style={styles.goback}
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/paroquia-go.png')}
          style={styles.logo}
        />
        <View />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
