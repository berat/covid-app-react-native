import {Linking, StatusBar} from 'react-native';
import * as React from 'react';
import Box from '../components/box';
import Bg from '../components/bg';
import Logo from '../components/logo';
import Search from '../components/search';
import SafeAreaView from 'react-native-safe-area-view';
import {CardComponent, CardTitle, CardContent} from '../components/card';

function SearchView() {
  return (
    <Box as={SafeAreaView} bg="#293f92">
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
      <Box mb={-299} position="relative" zIndex={2} top={-30}>
        <Box>
          <Search />
        </Box>
        <Box alignItems="center">
          <CardComponent onPress={() => Linking.openURL('http://google.com')}>
            <CardTitle>Başlık 1</CardTitle>
            <CardContent>
              içerik bir iki üc dort beş altı yedi sekiz
            </CardContent>
          </CardComponent>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchView;
