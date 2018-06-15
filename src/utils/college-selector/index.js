import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { modalBg, baseColor, gray } from '../common-styles';


export default class CitySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      maxIndex: 0,
      provience: {},
      city: {},
      area: {}
    };
  }

  render() {
    const { 
      index, 
      maxIndex, 
      provience, 
      city, 
      area 
    } = this.state;
    const { headerTitle, showSelector, onOk, onCancel } = this.props;
    
    return <Modal animationType="slide" transparent={true} visible={showSelector}>
    
      <View style={styles.modal}>
        <View style={styles.headerBox}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{
              headerTitle || '选择城市和地区'
            }</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={() => {
            typeof onCancel === 'function' && onCancel();
          }}>
            <Text style={styles.closeBtnText}>&times;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  }

  sortByFirstWord(dataList, key) {
    if(!dataList || dataList.length === 0) {
      return [];
    }
    return dataList.sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN', {sensitivity: 'accent'}))
  }
}

const styles = StyleSheet.create({
  modal: Object.assign(modalBg.toJS(), {
    paddingTop: 80
  }),
  headerBox: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeBtn: {
    width: 20,
    height: 20, 
    borderRadius: 8,
    backgroundColor: gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  closeBtnText: {
    color: 'white'
  },
  scrollableTabView: {
    backgroundColor: 'white'
  }
});

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} ><Text>123</Text></View>
);