import * as React from 'react';
import Text from './text';
import Box from './box';

function lastStatus() {
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
        <Text fontWeight="bold" fontSize={22} color="#e96936">
          20
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
        <Text fontWeight="bold" fontSize={22} color="#e03c58">
          2
        </Text>
        <Text fontSize={18} color="#e35069">
          Ölüm
        </Text>
      </Box>
      <Box width="33%" alignItems="center" py={10}>
        <Text fontWeight="bold" fontSize={22} color="#508e45">
          12
        </Text>
        <Text fontSize={18} color="#65af58">
          Enjekte
        </Text>
      </Box>
    </Box>
  );
}

export default lastStatus;
