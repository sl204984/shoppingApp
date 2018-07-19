import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { textGrayColor, lightGray, baseColor, blackGray } from '../utils/common-styles';

export default class ClassifyList extends Component {
  render() {
    const { curTabIndex, changeTab } = this.props;
    return (
      <View style={styles.tabBox}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {TabList.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.tabItem, 
                  curTabIndex === index ? styles.curTab : undefined
                ]}
                onPress={() => {
                  index !== curTabIndex && changeTab(item.value);
                }}
              >
                <Text style={ index !== curTabIndex ? styles.tabText : styles.curTabText }>
                  { item.label }
                </Text>
              </TouchableOpacity>
            ))} 
        </ScrollView>
      </View>

    )
  }
}

const TabList = [{
  label: '新鲜',
  value: 0
}, {
  label: '书籍',
  value: 1
}, {
  label: '美食',
  value: 2
}, {
  label: '服装',
  value: 3
}, {
  label: '手机',
  value: 4
}, {
  label: '电子',
  value: 5
}, {
  label: '数码',
  value: 6
}, {
  label: '美妆',
  value: 7
}, {
  label: '运动器械',
  value: 8
}, {
  label: '电器',
  value: 9
}, {
  label: '玩具乐器',
  value: 10
}];

const styles = StyleSheet.create({
  tabBox: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: lightGray,
    backgroundColor: 'white'
  },
  tabItem: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },

  curTab: {
    borderBottomColor: baseColor,
    borderBottomWidth: 3,
  },
  tabText: {
    color: textGrayColor
  },
  curTabText: {
    color: blackGray,
    fontSize: 16
  }
});