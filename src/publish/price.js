import React, { Component } from 'react';
import { TouchableOpacity, Text, View,  StyleSheet } from 'react-native';

import { narrowRow, textGrayColor, gray } from '../utils/common-styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TouchableOpacity style={styles.row}>
    <Text>价格</Text>
    <View style={styles.iconText}>
      <Text style={styles.count}>99</Text>
      <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
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
  sufIcon: {
    marginLeft: 10
  }
});