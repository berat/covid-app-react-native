import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';

import SearchView from './views/search';
import HomeView from './views/home';
import NewsView from './views/news';
import DetailView from './views/detail';
import {SafeAreaView} from 'react-native';
import Box from './components/box';
import TabBar from './components/tab-bar';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Search" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Search"
          tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="Home" component={HomeView} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="News" component={NewsView} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
