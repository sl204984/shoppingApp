import React, { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import {
  titleColor, 
  fontBold, 
  darkGray, 
  baseColor, 
  submitTextColor, 
  littleFont,
  loginContainer, 
  longConfirmBtn, 
  row
} from '../utils/common-styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      showPwd: false
    }
  }

  componentDidMount() {
  }

  render() {
    const { password, showPwd } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>U&nbsp;&nbsp;售</Text>

        <View style={styles.row}>
          <Text style={styles.label}>用户名</Text>
          <TextInput
            onChangeText={text => this.setState({userName: text})}
            underlineColorAndroid="transparent"
            defaultValue={this.state.userName}
            maxLength={16}
            style={styles.input}
            placeholder="请输入用户名"/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>密码</Text>
          <TextInput
            value={password}
            onChangeText={text => this.setState({password: text})}
            underlineColorAndroid="transparent"
            maxLength={20}
            secureTextEntry={!showPwd}
            defaultValue={this.state.password}
            style={styles.input}
            placeholder="请输入密码"/>
            <Icon 
              name={ showPwd ? 'eye-off' : 'eye' } 
              size={20} 
              onPress={() => this.setState({ showPwd: !showPwd })} />
        </View>

        <TouchableOpacity style={styles.loginBox} onPress={() => {
          this.login();
        }}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>

        <View style={styles.forgetBox}>
          <Text style={styles.register} onPress={() => {
            this.props.navigation.navigate('Register');
          }}>新用户注册</Text>
          <Text style={styles.forget} onPress={() => {
            this.props.navigation.navigate('ForgetPwd');
          }}>忘记密码？</Text>
        </View>

      </View>
    );
  }

  login() {
    const {userName, password} = this.state;
    // if(userName === '王小明' && password === '123456') {
      this.props.navigation.navigate('BottomNav');
    // }
  }

  register() {
    Alert.alert('注册账号', '选择注册方案', [
      {text:"方案一", onPress: () => {}},
      {text:"方案二", onPress: () => {}},
      {text:"方案三", onPress: () => {}},
      {text:"方案四", onPress: () => {}}
    ]);
  }
}

const styles = StyleSheet.create({
  container: loginContainer.toJS(),
  title: {
    fontSize: 40,
    alignItems: 'center',
    marginBottom: 40,
    color: titleColor,
    fontWeight: fontBold
  },
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
  },
  icon: {
    marginLeft: 5,
    marginRight: 5
  }
});