import React from "react";
import Platform from "Platform";
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { iconSpiro, iconCup } from "../imgs";

import MessageItem from '../utils/message-item';
export default class Messages extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    const data = [];
    for(let i = 0; i < 10; i++) {
      data.push({key: 'index-' + i});
    }
    
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={() =>
          <TouchableOpacity onPress={() => {
            navigate('Chat', { user: 'Sybil' });
          }}>
            <MessageItem avator={iconSpiro} 
              publisher={'星空下的仰望星空下的仰望星空下的仰望'} 
              chartInfo={'一二三四五一二三四五一二三四五一二三四五一二三四五'}
              dateInfo={'5天前'}
              unread={true}
              shoppingImg={iconCup} />
          </TouchableOpacity>
          
        }>
          
        </FlatList>
      </View>
    )
  }
}

const paddingTop = Platform.OS === 'android' ? 0 : 22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: paddingTop,
  },
});