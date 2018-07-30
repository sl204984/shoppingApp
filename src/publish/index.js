import React, { Component } from 'react';

import { 
  View, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';

import { 
  container, 
  longConfirmBtn, 
  submitTextColor, 
} from "../utils/common-styles";

import HeaderTitle from './header-title';
import Detail from './detail';
import ImgsDemo from './imgs-demo';
import Price from './price';
import Classification from './ classification';

const { width } = Dimensions.get('window');

export default class PublishDemo extends Component {
  state = {
    imgList: []
  }

  render() {
    const {
      imgList = []
    } = this.state;
    return (
      <View style={styles.container}>
        <HeaderTitle />
        <Detail />
        <ImgsDemo />
        <Price />
        <Classification />

        <TouchableOpacity style={styles.loginBox} onPress={() => {
        }}>
          <Text style={styles.loginText}>确定发布</Text>
        </TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: container.toJS(),
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
});