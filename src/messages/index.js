import React from "react";
import Platform from "Platform";
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import MessageItem from '../utils/message-item';

import CONFIG from '../utils/config';
export default class Messages extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    const data = [];
    for(let i = 0; i < 10; i++) {
      data.push({
        key: 'index-' + i, 
        shoppingImg: `${CONFIG.IMG_HOST}shopping/lipstick.jpeg`
      });
    }

    const _avatar = `${CONFIG.IMG_HOST}avatar/lovely.jpeg`;
    
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={({item}) => {
          return <TouchableOpacity onPress={() => {
            navigate('Chat', { user: 'Sybil' });
          }}>
            <MessageItem avator={{uri: _avatar}} 
              publisher={'星空下的仰望星空下的仰望星空下的仰望'} 
              chartInfo={'一二三四五一二三四五一二三四五一二三四五一二三四五'}
              dateInfo={'5天前'}
              unread={true}
              shoppingImg={{uri: item.shoppingImg}} />
          </TouchableOpacity>
        }
          
          
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