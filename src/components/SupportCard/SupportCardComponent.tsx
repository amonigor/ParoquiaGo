import React from 'react';

import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import { styles } from './SupportCardStyle';

interface SupportCardProps {
  title: string;
  text?: string;
  tel?: string;
  email?: string;
  address?: string;
  link?: string;
}

export const SupportCardComponent = ({
  title,
  text,
  tel,
  email,
  address,
  link,
}: SupportCardProps) => {
  const handleTouch = () => {
    if (!!link) {
      Linking.openURL(link);
      return;
    }
    if (!!tel) {
      Linking.openURL(`tel:${tel}`);
      return;
    }
    if (!!email) {
      Linking.openURL(`mailto:${email}`);
      return;
    }
  };

  return (
    <TouchableOpacity onPress={handleTouch} activeOpacity={0.75}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {!!text ? <Text style={styles.text}>{text}</Text> : <></>}
        {!!tel ? (
          <View style={styles.block}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/phone.png')}
            />
            <Text style={styles.text}>{tel}</Text>
          </View>
        ) : (
          <></>
        )}
        {!!email ? (
          <View style={styles.block}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/mail.png')}
            />
            <Text style={styles.text}>{email}</Text>
          </View>
        ) : (
          <></>
        )}
        {!!address ? (
          <View style={styles.block}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/church-pin-blue.png')}
            />
            <Text style={styles.text}>{address}</Text>
          </View>
        ) : (
          <></>
        )}
        {!!link ? (
          <View style={styles.block}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/open-link-blue.png')}
            />
            <Text style={styles.text}>Clique para mais informações</Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};
