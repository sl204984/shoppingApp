// 底部导航
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomePage from '../home-page';
import Category from '../category';
import Community from '../community';
import UserCenter from '../user-center';
import { baseColor } from "./common-styles";

import { 
  iconHome, 
  iconHomeS, 
  iconShop, 
  iconShopS,
  iconUserCenter,
  iconUserCenterS 
} from '../imgs/index';

export default pageNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={focused ? iconHomeS : iconHome} />
      )
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      tabBarLabel: '商品分类',
      tabBarIcon: ({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={focused ? iconShopS : iconShop} />
      )
    }
  },
  Community: {
    screen: Community,
    navigationOptions: {
      tabBarLabel: '社区',
      tabBarIcon: ({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={focused ? iconHomeS : iconHome} />
      )
    }
  },
  Center: {
    screen: UserCenter,
    navigationOptions: {
      tabBarLabel: '个人中心',
      tabBarIcon: ({ focused }) => (
        <Image resizeMode='contain' style={styles.image}
          source={focused ? iconUserCenterS : iconUserCenter} />
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