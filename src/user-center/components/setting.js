import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'; 

import { styles } from './feature-list';

import CONFIG from '../../utils/config';

const IconSetting = `${CONFIG.IMG_HOST}static/icons/settings.png`;
const IconMore = `${CONFIG.IMG_HOST}static/icons/more.png`;

export default class Setting extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const { navigate } = this.props;
    return <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={() => {
        navigate('Settings');
      }}>
        <View style={styles.iconText}>
          <Image source={{uri: IconSetting}} style={styles.imageIcon} />
          <Text>设置</Text>
        </View>
        <Image source={{uri: IconMore}} style={styles.imageMore} />

      </TouchableOpacity>
    </View>
  }
}
