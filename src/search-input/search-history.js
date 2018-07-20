import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { lightGray, textGrayColor } from '../utils/common-styles';

const historyList = [];

export default class SearchHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {historyList.map((item, index) => (
            <View style={styles.historyItem} key={index}>
              <Text>{item}</Text>
            </View>
          ))}
          <View style={styles.bottomLine}>
            <View style={styles.line} />
            <Text style={styles.bottomText}>
              {historyList.length > 0 ? '搜索历史' : '暂无搜索记录'}
            </Text>
            <View style={styles.line} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  historyContainer: {
    backgroundColor: 'white',
    width: '100%'
  },
  historyItem: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },
  bottomLine: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  bottomText: {
    color: textGrayColor
  },
  line: {
    flex: 1,
    width: 50,
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  }
});