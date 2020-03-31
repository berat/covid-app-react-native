import {Button, SafeAreView} from 'react-native';
import * as React from 'react';
import Box from '../components/box';
import Bg from '../components/bg';
import Logo from '../components/logo';
import Search from '../components/search';

function SearchView({navigation}) {
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
      <Box position="relative" zIndex={2} top={-30}>
        <Search />
      </Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </Box>
  );
}

export default SearchView;
