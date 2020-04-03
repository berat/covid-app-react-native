import * as React from 'react';
import {Linking, StatusBar, FlatList} from 'react-native';
import Box from '../components/box';
import Bg from '../components/bg';
import Logo from '../components/logo';
import {CardComponent, CardContent, CardTitle} from '../components/card';
import SafeAreaView from 'react-native-safe-area-view';

function NewsView() {
  const [news, setNews] = React.useState(null);

  const getNews = async () => {
    const response = await fetch(
      'http://newsapi.org/v2/top-headlines?country=tr&q=corona&apiKey=6053714b8d8b4f9bb128254669333953',
    );
    const data = await response.json();
    setNews(data.articles.slice(0, 8));
  };

  React.useState(() => {
    getNews();
  }, []);

  return (
    <Box as={SafeAreaView} bg="#293f92" flex={1} position="relative" zIndex={1}>
      <StatusBar barStyle="light-content" backgroundColor="#293f92" />
      <Box height={220} width={'100%'} position="relative" zIndex={1}>
        <Bg>
          <Box
            flex={1}
            flexDirection="row"
            alignItems="center"
            pl={40}
            mt={-20}
            justfiyContent="center">
            <Logo color="white" fontWeight="bold" fontSize={34}>
              COVİD APP
            </Logo>
          </Box>
        </Bg>
      </Box>
      <Box
        width="100%"
        flex={1}
        alignItems="center"
        bg="#f1f1f1"
        position="relative"
        mb={-20}
        zIndex={2}>
        <FlatList
          data={news}
          style={{
            width: '100%',
            top: -40,
            left: '7.5%',
          }}
          renderItem={({item}) => (
            <CardComponent onPress={() => Linking.openURL(item.url)}>
              <CardTitle>{item.title.substr(0, 50) + '...'}</CardTitle>
              <CardContent>
                {item.description.substr(0, 95) + '...'}
              </CardContent>
            </CardComponent>
          )}
          extraData={news}
          keyExtractor={item => item.id}
        />
      </Box>
    </Box>
  );
}

export default NewsView;
