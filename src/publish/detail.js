import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default class Detail extends Component {
  render() {
    return (
      <View style={styles.details}>
        <TextInput
          onChangeText={text => {
            
          }}
          defaultValue=""
          multiline={true}
          underlineColorAndroid="transparent"
          maxLength={200}
          style={styles.input}
          placeholder="请写下宝贝的故事吧~"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  details: {
    width: width,
    marginBottom: 10
  }
});