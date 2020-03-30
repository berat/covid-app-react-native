import * as React from 'react';
import Text from './text';
import Box from './box';

function TopDetail({children, ...props}) {
  return (
    <Box alignItems="center" {...props}>
      <Box
        width="85%"
        p={10}
        height={'auto'}
        borderRadius={14}
        flexDirection="column"
        bg="white"
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
        <Text fontSize={24} color="#4c4c4c" fontWeight="bold" pb={5}>
          SON DURUMLAR
        </Text>
        {children}
      </Box>
    </Box>
  );
}

export default TopDetail;
