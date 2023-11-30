import React, { useMemo } from 'react';

import { View, ScrollView, Text } from 'react-native';
import { GenericScreen } from '../GenericScreen';
import { NewsCardComponent } from '../../components/NewsCard/NewsCardComponent';

import { useNews } from '../../hooks/useNews';

import { styles } from './NewsScreenStyle';

export const NewsScreenComponent = (): JSX.Element => {
  const { data: newsData, isLoading } = useNews();
  const newsList = useMemo(() => {
    if (!newsData || isLoading) return [];
    return newsData.data;
  }, [newsData, isLoading]);

  return (
    <GenericScreen title="Notícias">
      <View style={styles.container}>
        <ScrollView>
          {!newsList.length && !isLoading ? (
            <Text style={styles.message}>Nenhuma notícia cadastrada</Text>
          ) : !!newsList.length ? (
            newsList.map(news => (
              <NewsCardComponent
                key={`${news.title}${news.link}${news.date}`}
                title={news.title}
                link={news.link}
                date={news.date}
              />
            ))
          ) : (
            <Text style={styles.message}>Aguarde...</Text>
          )}
        </ScrollView>
      </View>
    </GenericScreen>
  );
};
