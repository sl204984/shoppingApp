import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { rowStyles as styles } from './styles';
import { gray } from '../utils/common-styles';
import { Popup } from '../utils/modal';

export default class Price extends Component {
  state = {
    visible: false
  }

  render() {
    const { visible } = this.state;
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
        
        </Popup>
      </TouchableOpacity>
    )
  } 
}
