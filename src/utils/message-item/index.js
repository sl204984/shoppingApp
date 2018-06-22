import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { gray, colorhot, lightGray, baseColor } from '../common-styles';

export default class MessageItem extends Comment {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      avator,
      publisher,
      chartInfo,
      shoppingImg
    } = this.props;
    return <TouchableOpacity onPress={() => {}} style={styles.itemContainer}>

    
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 150
  },
})
