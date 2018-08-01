import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { rowStyles as styles } from './styles';
import { gray } from '../utils/common-styles';
import { Popup } from '../utils/modal';
import InputText from '../utils/input';
import CheckBox from '../utils/check-box';
import { NumberKeyboard } from '../utils/keyboard';
export default class Price extends Component {
  state = {
    visible: false,
    isShipping: false
  }

  render() {
    const { visible, isShipping } = this.state;
    return (
      <TouchableOpacity 
        style={styles.row} 
        onPress={() => this.setState({ visible: true })}
      >
        <Text>价格</Text>
        <View style={styles.iconText}>
          <Text style={styles.count}>99</Text>
          <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
        </View>

        <Popup 
          visible={visible} 
          title="请输入价格"
          onCancel={() => this.setState({
            visible: false
          })}
        >
          <View style={styles.dialogContainer}>
            <View style={{flex: 1}}>
              <View style={styles.dialogRow}>
                <View style={styles.label}>
                  <Text>价格：</Text>
                </View>
                <InputText focused />
              </View>

              <View style={styles.dialogRow}>
                <View style={styles.label}>
                  <Text>运费：</Text>
                </View>
                <CheckBox value={isShipping} onValueChange={({ target }) => {
                  this.setState({ isShipping: target.value });
                }}>
                  <Text>包邮</Text>
                </CheckBox>
              </View>
            </View>

            <NumberKeyboard />
            
          </View>
        </Popup>
      </TouchableOpacity>
    )
  }
}
