import * as React from 'react';
import Text from './text';
import Box from './box';

function TopDetail({children, ...props}) {
  return (
    <Box alignItems="center" flexDirection="column" mt={-40} {...props}>
      <Box
        width="90%"
        flexDirection="row"
        alignItems="center"
        position="relative"
        zIndex={3}
        justifyContent="space-between"
        bg="white"
        p={10}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.14,
          shadowRadius: 4.27,
          elevation: 2,
        }}>
        <Text fontSize={16} fontWeight="bold">
          Ülkeler
        </Text>
        <Text fontSize={16} fontWeight="bold">
          Vaka
        </Text>
        <Text fontSize={16} fontWeight="bold">
          Ölüm
        </Text>
        <Text fontSize={16} fontWeight="bold">
          Enjekte
        </Text>
      </Box>
      <Box
        position="relative"
        zIndex={2}
        width="90%"
        bg="white"
        flexDirection="column">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          py={20}
          px={10}
          borderBottomWidth="1px"
          borderColor="#dadada">
          <Text width={'25%'}>Türkiye</Text>
          <Text width={'25%'}>124</Text>
          <Text width={'25%'}>2</Text>
          <Text width={'25%'}>20</Text>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          py={20}
          px={10}
          borderBottomWidth="1px"
          borderColor="#dadada">
          <Text>Türkiye</Text>
          <Text>124</Text>
          <Text>2</Text>
          <Text>20</Text>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          py={20}
          px={10}
          borderBottomWidth="1px"
          borderColor="#dadada">
          <Text>Türkiye</Text>
          <Text>124</Text>
          <Text>2</Text>
          <Text>20</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default TopDetail;
