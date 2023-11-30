import React, { useMemo } from 'react';

import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import { styles } from './NewsCardStyle';

interface NewsCardProps {
  title: string;
  link: string;
  date: string;
}

export const NewsCardComponent = ({ title, link, date }: NewsCardProps) => {
  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
    }).format(new Date(date));
  }, [date]);

  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(link)}
      activeOpacity={0.75}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <View style={styles.block}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/open-link-blue.png')}
            />
            <Text style={styles.text}>
              Clique aqui para abrir a noticia no site
            </Text>
          </View>
          <View style={styles.block}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/calendar.png')}
            />
            <Text style={styles.text}>{formattedDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
