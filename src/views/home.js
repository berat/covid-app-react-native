import {SafeAreView} from 'react-native';
import * as React from 'react';

import Text from '../components/text';
import TopDetail from '../components/topDetail';
import {
  TableMain,
  TableCase,
  TableCountry,
  TableDeath,
  TableInject,
} from '../components/homeTable';
import Box from '../components/box';
import Bg from '../components/bg';
import Logo from '../components/logo';
import LastStatus from '../components/lastStatus';

function HomeView() {
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
      <Box position="relative" zIndex={2} mt={-50}>
        <TopDetail>
          <Text color="#9a9a9a" fontSize={15}>
            Güncellenme: <Text color="#46689c">30 Mart</Text>
          </Text>
          <LastStatus />
        </TopDetail>
      </Box>
      <Box position="relative" zIndex={2} mt={80}>
        <TableMain>
          <TableCountry>Türkiye</TableCountry>
          <TableCase>252</TableCase>
          <TableDeath>2</TableDeath>
          <TableInject>20</TableInject>
        </TableMain>
      </Box>
    </Box>
  );
}

export default HomeView;
