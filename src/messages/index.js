import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import { iconSpiro, iconCup } from "../imgs";

import MessageItem from '../utils/message-item';
export default class Messages extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = [];
    for(let i = 0; i < 10; i++) {
      data.push({key: 'index-' + i});
    }
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={() => 
          <MessageItem avator={iconSpiro} 
            publisher={'星空下的仰望'} 
            chartInfo={'里好呀'}
            shoppingImg={iconCup} />
        }>
          
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 22,
  },
});