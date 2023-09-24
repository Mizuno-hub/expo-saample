import React, {useState, useEffect, FlatList} from 'react';
import { StyleSheet, View } from 'react-native';
import NewsKizi from './components/NewsKizi';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = 'https://newsapi.org/v2/top-headlines?country=jp&entertainment=business&apiKey=1651c7495b254edcada20fa0d6e7cd59';

export default function App() {
  Constants.expoConfig.extra.fact === 'kittens are cool';

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get(URL);
    setNews(response.data.articles);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <NewsKizi
            imageurl={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
