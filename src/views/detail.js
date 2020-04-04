import Box from '../components/box';
import Text from '../components/text';
import PureChart from 'react-native-pure-chart';
import {StatusBar, SafeAreaView} from 'react-native';
import * as React from 'react';
import {useFocusEffect} from '@react-navigation/native';

function DetailView({route}) {
  const keyword = route.params.keyword;

  const [load, setLoad] = React.useState(false);
  const [turkey, setTurkey] = React.useState('');

  const getList = async () => {
    const response = await fetch('https://corona.lmao.ninja/countries');
    const data = await response.json();
    console.log(data.filter(item => item.country === keyword));
    setTurkey(data.filter(item => item.country === 'Turkey'));
    setLoad(true);
  };

  React.useState(() => {
    getList();
  }, [setLoad]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

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
    <Box as={SafeAreaView} bg="#f1f1f1" flex={1} position="relative" zIndex={1}>
      <Box p={40}>
        <Text fontWeight="bold" color="red" fontSize="25">
          {keyword}
        </Text>
      </Box>
      <Box alignItems="center" top={50}>
        <PureChart data={data} type="pie" />
      </Box>
    </Box>
  );
}

export default DetailView;
