import React, {Component} from 'react';
import {View, StyleSheet, Text, Modal} from 'react-native';

import {container} from "../utils/common-styles";

export default class Community extends Component {
  
  
  render() {
    const { navigate } = this.props.navigation;
    
    return <View style={styles.container}>
      <Text>Here community is!</Text>
      <Text
          onPress={() => {
            navigate('MyMap');
          }}>跳转</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: container.toJS()
});