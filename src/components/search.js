import * as React from 'react';
import Input from './input';
import Button from './button';
import Box from './box';
import {Search, Close} from './icons/';
import theme from '../utils/theme';

function SearchComponent({...params}) {
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState('');
  return (
    <Box flexDirection="row">
      <Box position="relative" flex={1} alignItems="center">
        <Input
          bg="white"
          height={60}
          width="85%"
          placeholder="Ülkeyi yazınız"
          placeholderTextColor="gray"
          border="1px solid"
          borderColor="#dadada"
          px={45}
          pr={33}
          borderRadius="normal"
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
          // onChangeText={text => setValue(text)}
          onFocus={() => setFocus(true)}
          // value={value}
          {...params}
        />
        <Button position="absolute" top={18} left={42}>
          <Search color={theme.colors.black} />
        </Button>
      </Box>
    </Box>
  );
}

export default SearchComponent;
