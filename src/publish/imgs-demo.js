import React, { Component } from 'react';

import { 
  View, 
  StyleSheet, 
  ScrollView, 
  Image, 
  Dimensions
} from 'react-native';

import { lightGray } from "../utils/common-styles";

export default class ImgsDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      imgList = []
    } = this.props;
    return <View style={styles.scrowView} >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        imgList.map((item, index) => <Image key={index} source={item} style={styles.img} />)
      }
      <View style={styles.addImg} />
    </ScrollView>
  </View>
  }
}

const { width } = Dimensions.get('window');

const imgWidth = 60;
const imgMargin = 5;

const styles = StyleSheet.create({
 
  scrowView: {
    width: width,
    height: imgWidth + imgMargin * 2
  },
  img: {
    width: imgWidth,
    height: imgWidth,
    margin: imgMargin
  },
  addImg: {
    width: imgWidth,
    height: imgWidth,
    margin: imgMargin - 2,
    borderWidth: 1,
    borderColor: lightGray,
    borderRadius: 5,
  },

});