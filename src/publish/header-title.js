import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default class HeaderTitle extends Component {
  render() {
    return (
      <View style={styles.headerTitle}>
        <TextInput
          onChangeText={text => {
            
          }}
          defaultValue=""
          maxLength={10}
          underlineColorAndroid="transparent"
          style={styles.input}
          placeholder="标题，不超过10个字"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    width: width,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});