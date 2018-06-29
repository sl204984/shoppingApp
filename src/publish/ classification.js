import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { iconMore } from '../imgs';
import { styles } from './price';

export default class Classification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TouchableOpacity style={styles.row}>
    <Text>分类</Text>
    <View style={styles.iconText}>
      <Text style={styles.count}>99</Text>
      <Image source={iconMore} style={styles.imageMore} />
    </View>
  </TouchableOpacity>
  } 
}
