import React, { useEffect, useState } from 'react';

import type { Church } from '../../interfaces/church';

import {
  Image,
  ImageSourcePropType,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useUrls } from '../../hooks/useUrls';

import { styles } from './ChurchCardStyle';
import { useSavedChurches } from '../../hooks/useSavedChurches';

interface ChurchCardProps {
  church: Church;
  small?: boolean;
  onPress?: () => void;
}

export const ChurchCardComponent = ({
  church,
  small,
  onPress,
}: ChurchCardProps) => {
  const { dioceseUrl } = useUrls();
  const [churchImg, setChurchImg] = useState<ImageSourcePropType>();
  const { isChurchSaved, updateChurch } = useSavedChurches();

  const computedStyle = !small
    ? {
        churchContainer: styles.churchContainer,
        leftItems: styles.leftItems,
        coverImg: styles.coverImg,
        rightItems: styles.rightItems,
        address: styles.address,
      }
    : {
        churchContainer: {
          ...styles.churchContainer,
          ...styles.churchContainerSm,
        },
        leftItems: { ...styles.leftItems, ...styles.leftItemsSm },
        coverImg: { ...styles.coverImg, ...styles.coverImgSm },
        rightItems: { ...styles.rightItems, ...styles.rightItemsSm },
        address: { ...styles.address, ...styles.addressSm },
      };

  useEffect(() => {
    if (!church) return;
    setChurchImg({ uri: `${dioceseUrl}/${church.images.image_intro}` });
  }, [church, dioceseUrl]);

  return (
    <>
      <View style={computedStyle.churchContainer}>
        <View style={computedStyle.leftItems}>
          {churchImg ? (
            <Image
              style={computedStyle.coverImg}
              defaultSource={require('../../assets/images/church.png')}
              source={churchImg}
              onError={() => {
                setChurchImg(require('../../assets/images/church.png'));
              }}
            />
          ) : (
            <></>
          )}
          {small ? (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => updateChurch(church.id)}>
              <View style={styles.buttonSm}>
                <Text style={styles.buttonTextSm}>
                  {isChurchSaved(church.id) ? 'Salva' : 'Salvar'}
                </Text>
                <Image
                  source={
                    isChurchSaved(church.id)
                      ? require('../../assets/images/bookmark-blue-sm.png')
                      : require('../../assets/images/bookmark-grey.png')
                  }
                  style={styles.iconSm}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        <TouchableOpacity
          style={computedStyle.rightItems}
          activeOpacity={1}
          onPress={onPress}>
          <Text style={styles.name}>{church.name}</Text>
          <View style={styles.detailsContainer}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/church-pin-blue.png')}
            />
            <Text style={computedStyle.address}>{church.address}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {!small ? (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() =>
              Linking.openURL(
                `google.navigation:q=${church.coordinates.lat}+${church.coordinates.lng}`,
              )
            }>
            <View style={{ ...styles.button, ...styles.searchButton }}>
              <Text
                style={{ ...styles.buttonText, ...styles.searchButtonText }}>
                Buscar rotas
              </Text>
              <Image
                source={require('../../assets/images/open-link-white.png')}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => updateChurch(church.id)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {isChurchSaved(church.id) ? 'Salva' : 'Salvar'}
              </Text>
              <Image
                source={
                  isChurchSaved(church.id)
                    ? require('../../assets/images/bookmark-blue-sm.png')
                    : require('../../assets/images/bookmark-grey.png')
                }
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};
