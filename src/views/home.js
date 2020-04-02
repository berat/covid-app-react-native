import * as React from 'react';
import {StatusBar, FlatList} from 'react-native';
import Text from '../components/text';
import SafeAreaView from 'react-native-safe-area-view';
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
import TopDetail from '../components/topDetail';

function HomeView() {
  const [list, setList] = React.useState('');

  const getList = async () => {
    const response = await fetch('https://corona.lmao.ninja/countries');
    const data = await response.json();
    setList(
      data.filter(
        item =>
          item.country === 'Turkey' ||
          item.country === 'France' ||
          item.country === 'USA' ||
          item.country === 'China' ||
          item.country === 'Germany',
      ),
    );
  };

  React.useState(() => {
    getList();
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
          <TopDetail>
            <Text color="#9a9a9a" fontSize={15}>
              Güncellenme: <Text color="#46689c">30 Mart</Text>
            </Text>
            <LastStatus />
          </TopDetail>
        </Box>
        <Box top={40}>
          <TableMain>
            <FlatList
              data={list}
              extraData={list}
              renderItem={({item}) => (
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  py={20}
                  px={10}
                  borderBottomWidth="1px"
                  borderColor="#dadada">
                  <TableCountry>{item.country}</TableCountry>
                  <TableCase>{item.cases}</TableCase>
                  <TableDeath>{item.deaths}</TableDeath>
                  <TableInject>{item.recovered}</TableInject>
                </Box>
              )}
              keyExtractor={item => item.id}
            />
          </TableMain>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeView;
