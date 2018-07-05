import React from "react";
import Platform from "Platform";
import { View, StyleSheet, FlatList } from 'react-native';
import { iconSpiro } from "../imgs";

import ShoppingItem from '../utils/shopping-item';
export default class HomePage extends React.Component {

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
          <ShoppingItem avator={'static/avatar/lovely.jpeg'} 
            price={60} 
            shoppingName={'tank'} 
            publisher={'星空下的仰望'} 
            imgList={['static/shopping/pen.jpeg', 'static/shopping/fan.jpg', 'static/shopping/book.jpg' ,'static/shopping/lipstick.jpeg']}
            point={100} 
            location={'南京南京'} />
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