import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { narrowRow, textGrayColor, white } from '../../utils/common-styles';
import CONFIG from '../../utils/config';

const IconPrefix = `${CONFIG.IMG_HOST}static/icons/`;
const IconMore = `${IconPrefix}more.png`;

export default class FeatureList extends Component {
  constructor(props) {
    super(props);
    const { navigate } = props;
    this.featureList = [{
      label: '我发布的',
      count: 1,
      icon: `${IconPrefix}publish.png`,
      onPress: () => {
        navigate('MyPublishList');
      }
    }, {
      label: '我卖出的',
      count: 3,
      icon: `${IconPrefix}sold.png`,
      onPress: () => {
        navigate('MySoldList');
      }
    }, {
      label: '我买到的',
      count: 5,
      icon: `${IconPrefix}buy.png`,
      onPress: () => {
        navigate('MyBoughtList');
      }
    }, {
      label: '我的收藏',
      count: 0,
      icon: `${IconPrefix}collect.png`,
      onPress: () => {
        navigate('MyCollectionList');
      }
    }, {
      label: '我的余额',
      count:  1000000000.123,
      icon: `${IconPrefix}balance.png`,
      onPress: () => {
        navigate('MyBalance', {balance: 1000000000.123});
      }
    }, {
      label: '我的优惠券',
      count: 100,
      icon: `${IconPrefix}coupon.png`,
      onPress: () => {
        navigate('MyDiscountCoupon')
      }
    }, {
      label: '签到',
      icon: `${IconPrefix}signin.png`,
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
                <Image source={{uri: item.icon}} style={styles.imageIcon} />
                <Text>{ item.label }</Text>
              </View>
              <View style={styles.iconText}>
                <Text style={styles.count}>{ item.count }</Text>
                <Image source={{uri: IconMore}} style={styles.imageMore} />
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
