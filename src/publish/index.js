import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { container } from "../utils/common-styles";

export default class PublishDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container}>
      <Text>发布你喜欢的吧</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: container.toJS()
});