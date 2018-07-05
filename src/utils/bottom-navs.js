// 底部导航
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomePage from '../home-page';
import Category from '../category';
import Publish from '../publish';
import Messages from '../messages';
import UserCenter from '../user-center';

import { baseColor } from "./common-styles";

import CONFIG from './config';

const IconPrefix = `${CONFIG.IMG_HOST}static/icons/`;

const IconHome = `${IconPrefix}home.png`;
const IconHomeS = `${IconPrefix}home-2.png`;

const IconShop = `${IconPrefix}shop.png`;
const IconShopS = `${IconPrefix}shop-2.png`;

const IconPublish = `${IconPrefix}publish.png`;
const IconPublishS = `${IconPrefix}publish-2.png`;

const IconChat = `${IconPrefix}chat.png`;
const IconChatS = `${IconPrefix}chat-2.png`;

const IconUser = `${IconPrefix}user.png`;
const IconUserS = `${IconPrefix}user-2.png`;

export default pageNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={{uri: focused ? IconHomeS : IconHome}} />
      )
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      tabBarLabel: '商品分类',
      tabBarIcon: ({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={{uri: focused ? IconShopS : IconShop}} />
      )
    }
  },
  Publish: {
    screen: Publish,
    navigationOptions: {
      tabBarLabel: '发布',
      tabBarIcon: (({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={{uri: focused ? IconPublishS : IconPublish}} />
      ))
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: '聊天',
      tabBarIcon: ({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={{uri: focused ? IconChatS : IconChat}} />
      )
    }
  },
  Center: {
    screen: UserCenter,
    navigationOptions: {
      tabBarLabel: '个人中心',
      tabBarIcon: ({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={{uri: focused ? IconUserS : IconUser}} />
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

const styles = {
  image: [{ width: 16, height: 16 }]
};