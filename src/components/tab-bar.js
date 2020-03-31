import React from 'react';
import Button from './button';
import Box from './box';
import {Search, Bookmark, Home} from './icons';

function tabBar({state, descriptors, navigation}) {
  return (
    <Box flexDirection="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box
            bg="#f1f1f1"
            borderRadius="full"
            size={6}
            p={40}
            mt={-20}
            alignItems="center"
            justifyContent="center">
            <Button
              size={56}
              bg={isFocused ? 'red' : 'white'}
              p={30}
              borderRadius="full"
              onPress={onPress}>
              <Search stroke={isFocused ? 'white' : 'red'} />
            </Button>
          </Box>
        ) : (
          <Button height={56} flex={1} onPress={onPress}>
            {label === 'Home' && (
              <Home stroke={isFocused ? '#2b2b2b' : 'gray'} />
            )}
            {label === 'News' && (
              <Bookmark stroke={isFocused ? '#2b2b2b' : 'gray'} />
            )}
          </Button>
        );
      })}
    </Box>
  );
}

export default tabBar;
