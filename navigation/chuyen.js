/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/Home';
import UserScreen from './screens/User';
const AppNavigation=createStackNavigator({
  Home:HomeScreen,
  Detail:DetailScreen,
});
export default createAppContainer(AppNavigation);
// const TabNavigator = createMaterialTopTabNavigator({
//   Home: HomeScreen,
//   User: UserScreen,
// });

// export default createAppContainer(TabNavigator);
