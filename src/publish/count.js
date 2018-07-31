import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { rowStyles as styles } from './styles';
import { gray } from '../utils/common-styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.row}>
        <Text>数量</Text>
        <View style={styles.iconText}>
          <Text style={styles.count}>1</Text>
          <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
        </View>
      </TouchableOpacity>
    )
  } 
}
