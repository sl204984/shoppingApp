import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { textGrayColor, footerHeight, white } from '../utils/common-styles';

const { width } = Dimensions.get('window');
export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height: footerHeight,
    backgroundColor: white
  }
});