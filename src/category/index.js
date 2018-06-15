import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { container } from "../utils/common-styles";

export default class Category extends Component {
  render() {
    return <View style={styles.container}>
      <Text>Here category is!</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: container.toJS()
});