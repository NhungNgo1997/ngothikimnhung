// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
import React from 'react';
 import {createStackNavigator} from 'react-navigation-stack';
 import {createAppContainer, TabNavigator} from 'react-navigation';
 import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

 import KhoanThuScreen from './KhoanThu';
 import KhoanChiScreen from './KhoanChi';
 //import DetailScreen from './Detail';


 const HomeStack = createStackNavigator({
  KhoanThu: KhoanThuScreen,
 
});
// // const DetailStack=createStackNavigator({
// //   Home:HomeScreen,
// //   Detail:DetailScreen,
// // });
export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      KhoanThu: HomeStack,
      KhoanChi: KhoanChiScreen,
      
    },
    {
      /* Other configuration remains unchanged */
    }
  )
);
  
// // const TabNavigator = createMaterialTopTabNavigator({
// //   Home: HomeScreen,
// //   User: UserScreen,
// // });

// //export default createAppContainer(TabNavigator);

