import * as React from 'react';
import {SafeAreView, Linking} from 'react-native';
import Box from '../components/box';
import Bg from '../components/bg';
import Logo from '../components/logo';
import {CardComponent, CardContent, CardTitle} from '../components/card';

function NewsView() {
  return (
    <Box as={SafeAreView} flex={1}>
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
      <Box position="relative" zIndex={2} top={-30} alignItems="center">
        <CardComponent onPress={() => Linking.openURL('http://google.com')}>
          <CardTitle>Başlık 1</CardTitle>
          <CardContent>içerik bir iki üc dort beş altı yedi sekiz</CardContent>
        </CardComponent>
      </Box>
    </Box>
  );
}

export default NewsView;
