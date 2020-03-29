import React from 'react';
import {View} from 'react-native';
import Button from './button';
import {Search, Bookmark, PieChart} from './icons';

function tabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
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
          <Button flex={1} onPress={onPress}>
            <Search />
          </Button>
        ) : (
          <Button height={56} flex={1} onPress={onPress}>
            {label === 'History' && <Bookmark />}
            {label === 'Favorite' && <PieChart />}
          </Button>
        );
      })}
    </View>
  );
}

export default tabBar;
