import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {
  darkGray, baseColor, submitTextColor, littleFont,
  loginContainer, longConfirmBtn, row
} from '../utils/common-styles';

export default class ForgetPwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      confirmPwd: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <Text style={styles.label}>新密码</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ password: text })}
            underlineColorAndroid="transparent"
            maxLength={20}
            password={true}
            placeholder="请输入新密码" />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>确认密码</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ confirmPwd: text })}
            underlineColorAndroid="transparent"
            maxLength={20}
            password={true}
            placeholder="请输入新密码" />
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ userName: text })}
            maxLength={12}
            underlineColorAndroid="transparent"
            placeholder="请输入验证码" />
          <Text style={styles.label}>获取验证码</Text>
        </View>

        <TouchableOpacity style={styles.loginBox} onPress={() => {
          this.modifyPwd();
        }}>
          <Text style={styles.loginText}>修改密码</Text>
        </TouchableOpacity>
      </View>
    );
  }

  modifyPwd() { }
}

const styles = StyleSheet.create({
  container: loginContainer.toJS(),
  row: row.toJS(),
  label: {
    width: 100
  },
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
  forgetBox: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  register: {
    fontSize: littleFont,
    color: baseColor
  },
  forget: {
    fontSize: littleFont,
    color: darkGray
  },
  input: {
    flex: 1
  }
});