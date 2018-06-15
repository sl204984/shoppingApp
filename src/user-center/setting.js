import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'; 

import { styles } from './feature-list';
import { iconMore } from '../imgs';

export default class Setting extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const { navigate } = this.props;
    return <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={() => {
        navigate('Settings');
      }}>
        <View style={styles.iconText}>
          <Image source={require('../imgs/icons/pokemonBall.png')} style={styles.imageIcon} />
          <Text>设置</Text>
        </View>
        <Image source={iconMore} style={styles.imageMore} />

      </TouchableOpacity>
    </View>
  }
}
