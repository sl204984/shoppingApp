import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { baseColor, textGrayColor } from '../utils/common-styles';
const { width } = Dimensions.get('window');

export default class SearchBox extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.searchBacground}>
          <TouchableOpacity 
            style={styles.searchBox} 
            onPress={() => {}}
          >
            <Icon name="search" style={styles.preIcon} size={16} />
            <Text style={styles.searchText}>搜索</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const paddingTB = 10;
const paddingLR = 10;
const styles = StyleSheet.create({
  header: {
    width,
    height: 50,
    backgroundColor: baseColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: paddingLR,
    paddingRight: paddingLR,
    paddingTop: paddingTB,
    paddingBottom: paddingTB
  },
  searchBacground: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderRadius: 3
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: 10
  },
  preIcon: {
    marginRight: 10,
    color: textGrayColor
  },
  searchText: {
    color: textGrayColor
  }
});