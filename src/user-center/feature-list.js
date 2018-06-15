import React, { Component } from 'react';
import { Image, View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { narrowRow, textGrayColor, white } from '../utils/common-styles';
import { iconMore } from '../imgs';

export default class FeatureList extends Component {
  constructor(props) {
    super(props);
    const { navigate } = props;
    this.featureList = [{
      label: '我发布的',
      count: 1,
      icon: require('../imgs/icons/pokemonBall.png'),
      onPress: () => {
        navigate('MyPublishList');
      }
    }, {
      label: '我卖出的',
      count: 3,
      icon: require('../imgs/icons/pokemonBall.png'),
      onPress: () => {
        navigate('MySoldList');
      }
    }, {
      label: '我买到的',
      count: 5,
      icon: require('../imgs/icons/pokemonBall.png'),
      onPress: () => {
        navigate('MyBoughtList');
      }
    }, {
      label: '我的收藏',
      count: 0,
      icon: require('../imgs/icons/pokemonBall.png'),
      onPress: () => {
        navigate('MyCollectionList');
      }
    }, {
      label: '我的余额',
      count: 0,
      icon: require('../imgs/icons/pokemonBall.png'),
      onPress: () => {
        navigate('MyBalance', {balance: 1000000000.123});
      }
    }, {
      label: '我的优惠券',
      count: 100,
      icon: require('../imgs/icons/pokemonBall.png'),
      onPress: () => {
        navigate('MyDiscountCoupon')
      }
    }, {
      label: '签到',
      icon: require('../imgs/icons/pokemonBall.png'),
      onPress: () => {
        navigate('SignIn')
      }
    }]
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.featureList.map((item, index) => {
            return <TouchableOpacity key={index} style={styles.row} onPress={() => {
              typeof item.onPress === 'function' && item.onPress();
            }}>
              <View style={styles.iconText}>
                <Image source={item.icon} style={styles.imageIcon} />
                <Text>{ item.label }</Text>
              </View>
              <View style={styles.iconText}>
                <Text style={styles.count}>{ item.count }</Text>
                <Image source={iconMore} style={styles.imageMore} />
              </View>
            </TouchableOpacity>
          })
        }
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: white,
    marginTop: 15
  },
  row: narrowRow.toJS(),
  count: {
    color: textGrayColor
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  imageMore: {
    width: 15,
    height: 15,
    marginLeft: 15,
  }
});
