import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import {
  darkGray, baseColor, submitTextColor, littleFont, loginContainer, longConfirmBtn, row
} from '../utils/common-styles';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      confirmPwd: '',
      tel: '',
      securityCode: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>用户名</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ userName: text })}
            maxLength={12}
            underlineColorAndroid="transparent"
            placeholder="请输入用户名" />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>密码</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ password: text })}
            underlineColorAndroid="transparent"
            maxLength={20}
            password={true}
            placeholder="请输入密码" />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>确认密码</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ confirmPwd: text })}
            underlineColorAndroid="transparent"
            maxLength={20}
            password={true}
            placeholder="请确认密码" />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>手机号</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ tel: text })}
            underlineColorAndroid="transparent"
            maxLength={11}
            placeholder="请输入手机号" />
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ securityCode: text })}
            underlineColorAndroid="transparent"
            maxLength={6}
            placeholder="验证码" />
          <Text style={styles.label} onPress={() => {
            Alert.alert('获取验证码', '验证码已发送至手机');
          }}>获取验证码</Text>
        </View>

        <TouchableOpacity style={styles.loginBox} onPress={() => {
          this.login();
        }}>
          <Text style={styles.loginText}>注册</Text>
        </TouchableOpacity>

        <View style={styles.protocolBox}>
          <Text style={styles.haveRead}>我已阅读</Text>
          <Text style={styles.protocol} onPress={() => {
            this.props.navigation.navigate('Protocol');
          }}>《用户条款协议》</Text>
        </View>

      </View>
    );
  }

  login() {
    const { userName, password, confirmPwd } = this.state;

  }

  register() {
    Alert.alert('注册账号', '选择注册方案', [
      {
        text: "方案一", onPress: () => {
        }
      },
      {
        text: "方案二", onPress: () => {
        }
      },
      {
        text: "方案三", onPress: () => {
        }
      },
      {
        text: "方案四", onPress: () => {
        }
      }
    ]);
  }
}

const styles = StyleSheet.create({
  container: loginContainer.toJS(),
  row: row.toJS(),
  label: {
    width: 100,
  },
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
  protocolBox: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  haveRead: {
    fontSize: littleFont,
    color: darkGray
  },
  protocol: {
    fontSize: littleFont,
    color: baseColor
  },
  input: {
    flex: 1
  }
});