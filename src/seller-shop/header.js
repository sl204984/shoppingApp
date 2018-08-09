import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CONFIG from '../utils/config';
import { white, gray } from '../utils/common-styles';
const AvatarImg = require('../local-imgs/lovely.jpeg');

const { width } = Dimensions.get('window');

// md-return-left arrow-left
export default class Header extends Component {
  render() {
    const { owner, avatar, point, navigation } = this.props;
    const _avatar = avatar ? { uri: CONFIG.IMG_HOST + avatar } : AvatarImg;
    return (
      <View style={styles.container}>

        <Text style={styles.back} onPress={() => {
          navigation.goBack();
        }}>
          <Icon name="angle-left" size={18} />
          点此返回
        </Text>

        <View style={styles.topRow}>
          <View>
            <Text style={styles.ownerText}>{ owner }的店铺</Text>
            <Text style={styles.pointText}>信用值：{ point }</Text>
          </View>
          <Image source={_avatar} style={styles.avatar} />
        </View>
        
        <View style={styles.bottomRow}>
          <View style={styles.searchBox}>
            <Icon name="search" style={styles.preIcon} size={16} />
            <Text style={styles.searchText}>店铺内搜索</Text>
          </View>
          
          <View style={styles.searchBox}>
            <Text style={styles.searchText}>赞该店铺</Text>
          </View>

        </View>

      </View>
    )
  }
}

const searchBoxHeight = 32;
const styles = StyleSheet.create({
  back: {
    color: white,
    marginBottom: 10,
    lineHeight: 20
  },
  container: {
    width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 10
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  ownerText: {
    color: white,
    fontSize: 16,
    marginBottom: 5,
  },
  pointText: {
    color: white,
    fontSize: 12,
    marginBottom: 5
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBox: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: gray,
    height: searchBoxHeight,
    alignItems: 'center',
    borderRadius: searchBoxHeight / 2,
    paddingLeft: 10,
    paddingRight: 10
  },
  preIcon: {
    marginRight: 5,
    color: white
  },
  searchText: {
    color: white,
    fontSize: 12
  },

  
});