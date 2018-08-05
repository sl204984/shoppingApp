import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Footer from './footer';

export default class GoodsDetail extends Component {
  render() {
    return (
      <View>
        <ScrollView></ScrollView>
        <Footer />
      </View>
    )
  }
}