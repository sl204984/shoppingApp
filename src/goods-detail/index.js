import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Footer from './footer';
import ImageViewer from 'react-native-image-zoom-viewer';
import CONFIG from '../utils/config';

const ImageLovely = require('../local-imgs/lovely.jpeg');

export default class GoodsDetail extends Component {
  render() {
    const { navigation } = this.props;
    const imgSrc = CONFIG.IMG_HOST + 'static/shopping/pen.jpeg';
    console.log('imgSrc', imgSrc);
    return (
      <View style={styles.container}>
        <ScrollView>
          
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