import React, { Component } from 'react';

import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity
} from 'react-native';

import { 
  container, 
  longConfirmBtn, 
  submitTextColor, 
} from "../utils/common-styles";

import HeaderTitle from './header-title';
import Detail from './detail';
import ImgsDemo from './imgs-demo';
import Price from './price';
import Count from './count';
import Store from './store';
import Classification from './ classification';
import Location from './location';

export default class PublishDemo extends Component {
  state = {
    shoppingName: '',
    userId: '',
    shoppingId: '',
    price: '',
    count: '',
    store: '',
    desc: '',
    imgList: [],
    location: '',
    type: 0
  }

  render() {
    const {
      imgList,
      type
    } = this.state;
    return (
      <View style={styles.container}>
        <HeaderTitle />
        <Detail />
        <ImgsDemo />
        <Price />
        <Count />
        <Classification type={type} />
        <Store />
        <Location />

        <TouchableOpacity style={styles.loginBox} onPress={() => {
        }}>
          <Text style={styles.loginText}>确定发布</Text>
        </TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: container.toJS(),
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
});