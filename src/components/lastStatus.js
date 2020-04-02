import * as React from 'react';
import Text from './text';
import Box from './box';

function lastStatus() {
  const [status, setStatus] = React.useState('null');

  const getStatus = async () => {
    const response = await fetch('https://corona.lmao.ninja/all');
    const data = await response.json();
    setStatus(data);
  };

  React.useState(() => {
    getStatus();
  }, [setStatus]);
  return (
    <Box
      flexDirection="row"
      justfiyContent="space-beetwen"
      alignItems="center"
      py={10}
      mt={10}>
      <Box
        width="33%"
        alignItems="center"
        borderRightWidth="1px"
        borderRightColor="#dcdcdc"
        py={10}>
        <Text fontWeight="bold" fontSize={21} color="#e96936">
          {status.cases}
        </Text>
        <Text fontSize={18} color="#ec7b4e">
          Vaka
        </Text>
      </Box>
      <Box
        width="33%"
        alignItems="center"
        borderRightWidth="1px"
        borderRightColor="#dcdcdc"
        py={10}>
        <Text fontWeight="bold" fontSize={21} color="#e03c58">
          {status.deaths}
        </Text>
        <Text fontSize={18} color="#e35069">
          Ölüm
        </Text>
      </Box>
      <Box width="33%" alignItems="center" py={10}>
        <Text fontWeight="bold" fontSize={21} color="#508e45">
          {status.recovered}
        </Text>
        <Text fontSize={18} color="#65af58">
          İyileşen
        </Text>
      </Box>
    </Box>
  );
}

export default lastStatus;
