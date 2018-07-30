import React, { Component } from 'react';
import { TouchableOpacity, Text, View,  StyleSheet } from 'react-native';

import { narrowRow, textGrayColor } from '../utils/common-styles';

export default class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TouchableOpacity style={styles.row}>
    <Text>价格</Text>
    <View style={styles.iconText}>
      <Text style={styles.count}>99</Text>
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