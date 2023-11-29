import React, { useMemo } from 'react';

import { View, ScrollView } from 'react-native';
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
          {newsList.map(news => (
            <NewsCardComponent
              key={news.header}
              title={news.header}
              link={news.link}
              date={news.date}
            />
          ))}
        </ScrollView>
      </View>
    </GenericScreen>
  );
};
