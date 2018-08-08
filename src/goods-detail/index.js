import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Footer from './footer';
import CONFIG from '../utils/config';
import ImageSwiper from './swiper';
import PublishInfo from './publish-info';
import Price from './price';
import Desc from './desc';
import Recommend from './recommend';

export default class GoodsDetail extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation.getParam('goodsDetail'))
    const imgSrc = CONFIG.IMG_HOST + 'static/shopping/fan.jpg';
    return (
      <View style={styles.container}>
        <ScrollView >
          <ImageSwiper 
            imgList={[imgSrc, imgSrc, imgSrc, imgSrc, imgSrc, imgSrc]}
          />
          <PublishInfo 
            publisher={'sl204984'} 
            avatar={'static/avatar/lovely.jpeg'}
            location={'江苏南京'}
            point={100}
          />
          <Price price={28} shipFee={3} />
          <Desc 
            shoppingName={'学习用品学习用品学习用品学习用品学习用品'}
            desc={'学习用的感觉到咖喱圣诞节阿里gas来的高科技啊路过看见了斯柯达跟进啊独孤伽罗大公鸡爱丽丝开关机拉科技科技啊路过看见了斯柯达跟进啊独孤伽罗大'}
          />
          <Recommend 
            navigation={navigation} 
          />
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