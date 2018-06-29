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

import ImgsDemo from './imgs-demo';
import Price from './price';
import Classification from './ classification';

const { width } = Dimensions.get('window');

export default class PublishDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      imgList = []
    } = this.props;
    return <View style={styles.container}>

      <View style={styles.headerTitle}>
        <TextInput
          onChangeText={text => {
            
          }}
          defaultValue=""
          maxLength={12}
          underlineColorAndroid="transparent"
          style={styles.input}
          placeholder="标题"/>
      </View>
      
      <View style={styles.details}>
        <TextInput
          onChangeText={text => {
            
          }}
          defaultValue=""
          multiline={true}
          underlineColorAndroid="transparent"
          maxLength={120}
          style={styles.input}
          placeholder="请写下宝贝的故事吧~"/>
      </View>

      <ImgsDemo />
      <Price />
      <Classification />

      <TouchableOpacity style={styles.loginBox} onPress={() => {
      }}>
        <Text style={styles.loginText}>确定发布</Text>
      </TouchableOpacity>
    </View>
  }
}



const styles = StyleSheet.create({
  container: container.toJS(),
  headerTitle: {
    width: width
  },
  details: {
    width: width
  },
  input: {
    // flex: 1
  },
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
});