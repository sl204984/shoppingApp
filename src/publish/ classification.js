import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { styles } from './price';
import CONFIG from '../utils/config';

const IconPrefix = `${CONFIG.IMG_HOST}static/icons/`;
const IconMore = `${IconPrefix}more.png`;

export default class Classification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TouchableOpacity style={styles.row}>
    <Text>分类</Text>
    <View style={styles.iconText}>
      <Text style={styles.count}>99</Text>
      <Image source={{uri: IconMore}} style={styles.imageMore} />
    </View>
  </TouchableOpacity>
  } 
}
