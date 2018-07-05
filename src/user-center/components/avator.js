import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { iconSpiro } from '../../imgs';
import { baseColor, white } from '../../utils/common-styles';

export default class Avator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatorWrap}>
          <Image style={styles.avatorImg} source={iconSpiro} />
          <Text style={styles.avatorText}>王宝弱</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  avatorWrap: {
    width: '100%',
    height: 200,
    backgroundColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatorImg: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginBottom: 15
  },
  avatorText: {
    color: white
  }
});
