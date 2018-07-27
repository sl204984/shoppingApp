// 底部导航
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomePage from '../home-page';
import Category from '../category';
import Publish from '../publish';
import Messages from '../messages';
import UserCenter from '../user-center';

import { baseColor, blackGray } from "./common-styles";

export default pageNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => (
        <Icon name="ios-home-outline" size={20} color={focused ? baseColor : blackGray} />
      )
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      tabBarLabel: '商品分类',
      tabBarIcon: ({ focused }) => (
        <Icon name="ios-cart-outline" size={20} color={focused ? baseColor : blackGray} />
      )
    }
  },
  Publish: {
    screen: Publish,
    navigationOptions: {
      tabBarLabel: '发布',
      tabBarIcon: (({ focused }) => (
        <Icon name="ios-add-circle-outline" size={20} color={focused ? baseColor : blackGray} />
      ))
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: '聊天',
      tabBarIcon: ({ focused }) => (
        <Icon name="ios-chatbubbles-outline" size={20} color={focused ? baseColor : blackGray} />
      )
    }
  },
  Center: {
    screen: UserCenter,
    navigationOptions: {
      tabBarLabel: '个人中心',
      tabBarIcon: ({ focused }) => (
        <Icon name="ios-person-outline" size={20} color={focused ? baseColor : blackGray} />
      )
    }
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: baseColor
  },
  animated: true
});
