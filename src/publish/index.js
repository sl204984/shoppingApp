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
    shipFee: '', // 邮费
    count: '',
    store: '',
    desc: '',
    imgList: [],
    location: '',
    type: 0
  }

  render() {
    const {
      shoppingName,
      desc,
      imgList,
      price,
      shipFee,
      count,
      store,
      type
    } = this.state;
    return (
      <View style={styles.container}>
        <HeaderTitle 
          value={shoppingName}
          changeValue={val => {
            this.setState({ shoppingName: val });
          }}
        />

        <Detail
          value={desc}
          changeValue={val => {
            this.setState({ desc: val });
          }} />

        <ImgsDemo />

        <Price 
          price={price} 
          shipFee={shipFee}
          changePrice={({ price, shipFee }) => this.setState({ 
            price, shipFee 
          })} 
        />

        <Count
          count={count}
          changeCount={({ count }) => this.setState({ count })} 
        />

        <Classification 
          value={type} 
          changeType={({ type }) => this.setState({ type })} 
        />

        <Store 
          store={store} 
          changeStore={({ store }) => this.setState({ store })}
        />
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