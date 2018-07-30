import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './price';
import { gray } from '../utils/common-styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import CitySelector from '../utils/city-selector';

export default class Location extends Component {

  state = {
    showCitySelect: false,
    permanetAddress: ''
  }

  render() {
    const { showCitySelect, permanetAddress } = this.state;
    return (
      <TouchableOpacity style={styles.row} onPress={() => {
        this.setState({ showCitySelect: true });
      }}>
        <Text>发布地点</Text>
        <View style={styles.iconText}>
          <Text style={styles.count}>{permanetAddress}</Text>
          <Icon name="angle-right" size={20} style={styles.sufIcon} color={gray} />
        </View>
        <CitySelector 
          showCitySelect={showCitySelect} 
          onOk={area => this.setState({ 
            permanetAddress: area, 
            showCitySelect: false
          })}
          onCancel={() => this.setState({ showCitySelect: false })} 
        />
      </TouchableOpacity>
    )
  }
}