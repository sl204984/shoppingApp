import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Footer from './footer';
import CONFIG from '../utils/config';
import ImageSwiper from './swiper';
import Price from './price';

export default class GoodsDetail extends Component {
  render() {
    const { navigation } = this.props;
    const imgSrc = CONFIG.IMG_HOST + 'static/shopping/fan.jpg';
    return (
      <View style={styles.container}>
        <ScrollView >
          <ImageSwiper 
            imgList={[imgSrc, imgSrc, imgSrc, imgSrc, imgSrc, imgSrc]}
          />
          <Price price={28} shipFee={0} />
        </ScrollView>
        <Footer 
          navigation={navigation} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  }
})