import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { textGrayColor, paddingTop, lightGray, baseColor, blackGray, gray } from '../utils/common-styles';

export default class InputHeader extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.searchContainer}>
        <Icon 
          name="angle-left" 
          size={24} 
          style={styles.icon} 
          color={gray} 
          onPress={() => {navigation.goBack();}} />

          <View style={styles.searchBacground}>
          <TouchableOpacity 
            style={styles.searchBox} 
            onPress={() => {
              navigation.navigate('SearchInput');
            }}
          >
            <Icon name="search" style={styles.preIcon} size={16} />
            <Text style={styles.searchText}>搜索</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
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
})