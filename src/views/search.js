import {Linking, StatusBar, FlatList} from 'react-native';
import * as React from 'react';
import Box from '../components/box';
import Bg from '../components/bg';
import Logo from '../components/logo';
import Search from '../components/search';
import SafeAreaView from 'react-native-safe-area-view';
import {CardComponent, CardTitle, CardContent} from '../components/card';

function SearchView() {
  const [news, setNews] = React.useState(null);

  const getNews = async () => {
    const response = await fetch(
      'http://newsapi.org/v2/top-headlines?country=us&q=corona&apiKey=6053714b8d8b4f9bb128254669333953',
    );
    const data = await response.json();
    setNews(data.articles.slice(0, 3));
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
      <Box flex={1} bg="#f1f1f1" position="relative" mb={-400} zIndex={2}>
        <Box top={-40}>
          <Search />
        </Box>
        <Box alignItems="center">
          <FlatList
            data={news}
            style={{
              width: '100%',
              top: -20,
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
            keyExtractor={item => item.id}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SearchView;
