import * as React from 'react';
import {StatusBar, FlatList, ScrollView, Dimensions} from 'react-native';
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
import PureChart from 'react-native-pure-chart';

const aylar = [
  'Ocak',
  'Subat',
  'Mart',
  'Nisan',
  'Mayis',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylul',
  'Ekim',
  'Kasim',
  'Aralik',
];

function HomeView() {
  const [list, setList] = React.useState('');
  const [lastDate, setLastDate] = React.useState('');
  const [turkey, setTurkey] = React.useState('');
  const [load, setLoad] = React.useState(false);
  // const [confirmed, setConfirmed] = React.useState('');
  // const [deaths, setDeaths] = React.useState('');
  // const [deathsD, setDeathsD] = React.useState('');
  // const [confirmedD, setConfirmedD] = React.useState('');
  // const [confirmedBirlestir, setConfirmedBirlestir] = React.useState('');

  const getList = async () => {
    const response = await fetch('https://corona.lmao.ninja/countries');
    const lastUpdate = await fetch('https://corona.lmao.ninja/all');
    const dataDate = await lastUpdate.json();
    const data = await response.json();
    const tarih = new Date(dataDate.updated);
    setLastDate(
      `${tarih.getDate()} ${aylar[tarih.getMonth()]} ${tarih.getFullYear()}`,
    );
    // console.log(data.filter(item => item.country === 'Turkey'));
    setTurkey(data.filter(item => item.country === 'Turkey'));
    setLoad(true);
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

  // var dataSonC = [];
  // var dataSonD = [];
  // const graph = async () => {
  //   const response = await fetch(
  //     'https://api.covid19api.com/dayone/country/Turkey/status/confirmed',
  //   );
  //   const responseD = await fetch(
  //     'https://api.covid19api.com/dayone/country/Turkey/status/deaths',
  //   );
  //   const data = await response.json();
  //   const dataD = await responseD.json();
  // const tarih = data
  //   .map(item => item.Date)[0]
  //   .slice(0, 10)
  //   .split('-')
  //   .reverse()
  //   .join('/');
  // var str = JSON.stringify(data);
  // str = str.replace(/Cases/g, 'y');
  // str = str.replace(/Date/g, 'x');
  // let dataList = JSON.parse(str);
  // var strD = JSON.stringify(dataD);
  // strD = strD.replace(/Cases/g, 'y');
  // strD = strD.replace(/Date/g, 'x');
  // let dataListD = JSON.parse(strD);
  // setConfirmed(dataList.map(item => item.y));
  // setDeaths(dataListD.map(item => item.y));
  // dataList.map(item => {
  //   dataSonC.push({
  //     x: `${new Date(item.x).getDate()}/${
  //       aylar[new Date(item.x).getMonth()]
  //     }/${new Date(item.x).getFullYear()}`,
  //     y: item.y,
  //   });
  // });
  // setConfirmedD(dataSonC);
  // dataListD.map(item => {
  //   dataSonD.push({
  //     x: `${new Date(item.x).getDate()}/${
  //       aylar[new Date(item.x).getMonth()]
  //     }/${new Date(item.x).getFullYear()}`,
  //     y: item.y,
  //   });
  // });
  // setDeathsD(dataSonD);
  // setConfirmedD(data.map(item => item.Date));
  // data.map(item => item);
  // };

  React.useState(() => {
    getList();
    // graph();
  }, [setLoad]);

  var data = load
    ? [
        {
          value: turkey[0].cases,
          label: 'Vaka',
          color: 'blue',
        },
        {
          value: turkey[0].recovered,
          label: 'İyileşen',
          color: 'green',
        },
        {
          value: turkey[0].deaths,
          label: 'Ölüm',
          color: 'red',
        },
      ]
    : [
        {
          value: 50,
          label: 'Ölüm',
          color: 'red',
        },
        {
          value: 40,
          label: 'Vaka',
          color: 'blue',
        },
        {
          value: 25,
          label: 'İyileşen',
          color: 'green',
        },
      ];

  return (
    <Box as={SafeAreaView} bg="#293f92" flex={1} position="relative" zIndex={1}>
      <StatusBar barStyle="light-content" backgroundColor="#293f92" />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#f1f1f1',
          flexGrow: 1,
          paddingBottom: 100,
          marginBottom: 50,
        }}>
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
        <Box flex={1} bg="#f1f1f1" position="relative" zIndex={2}>
          <Box top={-40}>
            <TopDetail>
              <Text color="#9a9a9a" fontSize={15}>
                Güncellenme: <Text color="#46689c">{lastDate}</Text>
              </Text>
              <LastStatus />
            </TopDetail>
          </Box>
          <Box flexDirection="column">
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
            <Box top={60} alignItems="center">
              <PureChart data={data} type="pie" />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}

export default HomeView;
