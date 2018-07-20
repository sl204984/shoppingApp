import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { paddingTop } from '../utils/common-styles';
import InputHeader from './search-header';
import SearchHistory from './search-history';

const { width } = Dimensions.get('window');

export default class SearchInput extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <InputHeader navigation={navigation} />
        <SearchHistory />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    paddingTop: paddingTop,
  },
  
})