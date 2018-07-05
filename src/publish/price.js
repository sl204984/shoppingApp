import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image,  StyleSheet } from 'react-native';

import { narrowRow, textGrayColor } from '../utils/common-styles';
import CONFIG from '../utils/config';

const IconPrefix = `${CONFIG.IMG_HOST}static/icons/`;
const IconMore = `${IconPrefix}more.png`;


export default class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TouchableOpacity style={styles.row}>
    <Text>价格</Text>
    <View style={styles.iconText}>
      <Text style={styles.count}>99</Text>
      <Image source={{uri: IconMore}} style={styles.imageMore} />
    </View>
  </TouchableOpacity>
  } 
}

export const styles = StyleSheet.create({
  row: narrowRow.toJS(),
  
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    color: textGrayColor
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
  },
});