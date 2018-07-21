import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { textGrayColor, gray } from '../utils/common-styles';

export default class InputHeader extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.searchContainer}>
        <Icon 
          name="angle-left" 
          size={28} 
          style={styles.icon} 
          color={gray} 
          onPress={() => {
            navigation.goBack();
          }} 
        />
        <View style={styles.searchBacground}>
          <Icon name="search" style={styles.preIcon} size={16} />
          <TextInput
            onChangeText={text => {}}
            underlineColorAndroid="transparent"
            maxLength={12}
            style={styles.input}
            placeholder="他密"/>
        </View>

        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
          <Text style={styles.icon}>搜索</Text>
        </TouchableOpacity>
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
    paddingBottom: 10
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  searchBacground: {
    backgroundColor: 'white',
    flex: 1,
    height: 30,
    borderRadius: 3,
    flexDirection: 'row',
    // alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  preIcon: {
    marginRight: 10,
    color: textGrayColor,
    alignSelf: 'center'
  },
  input: {
    flex: 1
  },
  searchText: {
    color: textGrayColor
  }
})