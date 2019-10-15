/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {createAppContainer, TabNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation-tabs';

import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/KhoanThu';
import DetailScreen from './screens/Detail';
import KhoanChiScreen from './screens/KhoanChi';
import Main from './screens/Main';
import ThemScreen from './screens/Them';
import SuaScreen from './screens/Sua';
import ThemChiScreen from './screens/ThemChi';
import SuaChiScreen from './screens/SuaChi';


const LoginStack=createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen,
  KhoanThu:HomeScreen,
  MHMain:Main,
  Detail:DetailScreen,
  KhoanChi:KhoanChiScreen,
  Them:ThemScreen,
  Sua:SuaScreen,
  ThemChi:ThemChiScreen,
  SuaChi:SuaChiScreen
});


// const HomeStack=createStackNavigator({
//   Home:HomeScreen,
//   Detail:DetailScreen,
// });
export default createAppContainer(LoginStack);


//export default createAppContainer(TabNavigator);
