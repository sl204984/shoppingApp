import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { container } from "../utils/common-styles";

export default class Protocol extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <View style={styles.container}>
        <ScrollView>
          <Text>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            这儿写用户协议。
            这儿写用户协议。这儿写用户协议。这儿写用户协议。这儿写用户协议。这儿写用户协议。这儿写用户协议。
          </Text>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: container.toJS()
});