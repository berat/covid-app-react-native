import * as React from 'react';
import Text from './text';
import Button from './button';
import Box from './box';

export function CardComponent({children, ...props}) {
  return (
    <Button
      bg="white"
      width="85%"
      mt={15}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.14,
        shadowRadius: 4.27,
        elevation: 2,
      }}
      p={10}
      borderRadius="normal"
      {...props}>
      <Box flex={1} px={10}>
        {children}
      </Box>
    </Button>
  );
}

export function CardTitle({children}) {
  return (
    <Text fontWeight="bold" fontSize={16}>
      {children}
    </Text>
  );
}

export function CardContent({children}) {
  return (
    <Text fontSize={15} pt={4}>
      {children}
    </Text>
  );
}
