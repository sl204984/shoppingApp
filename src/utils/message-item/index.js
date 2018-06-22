import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { gray, colorhot, lightGray, baseColor } from '../common-styles';

const { width } = Dimensions.get('window');

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      avator,
      publisher,
      chartInfo,
      shoppingImg
    } = this.props;
    return <View style={styles.itemContainer}>
      <Image style={styles.avatar} source={avator} />
      <View style={styles.messageBox}>
        <Text style={styles.publisher}>{ publisher.substr(0, 16) }</Text>
        <Text style={styles.chartInfo}>{ chartInfo.substr(0, 20) }</Text>
      </View>
      <Image style={styles.shoppingImg} source={shoppingImg} />
    </View>
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 100,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: lightGray
  },
  avatar: {
    width: 60,
    height: 60
  },
  messageBox: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10
  },
  publisher: {
    marginBottom: 10,
  },
  chartInfo: {
    color: gray
  },
  shoppingImg: {
    width: 80,
    height: 80
  }
})
