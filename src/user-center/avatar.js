import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { baseColor, white } from '../utils/common-styles';

import CONFIG from '../utils/config';

export default class Avatar extends Component {
  render() {
    const _avatar = `${CONFIG.IMG_HOST}static/avatar/lovely.jpeg`;
    return (
      <View style={styles.container}>
        <View style={styles.avatarWrap}>
          <Image style={styles.avatarImg} source={{uri: _avatar}} />
          <Text style={styles.avatarText}>王宝弱</Text>
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
  avatarWrap: {
    width: '100%',
    height: 200,
    backgroundColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginBottom: 15
  },
  avatarText: {
    color: white
  }
});
