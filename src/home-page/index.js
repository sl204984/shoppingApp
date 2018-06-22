import React from "react";
import Platform from "Platform";
import { View, StyleSheet, FlatList } from 'react-native';
import { iconSpiro, iconCup } from "../imgs";

import ShoppingItem from '../utils/shopping-item';
export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // const { navigate } = this.props.navigation;
    const data = [];
    for(let i = 0; i < 10; i++) {
      data.push({key: 'index-' + i});
    }
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={() => 
          <ShoppingItem avator={iconSpiro} 
            price={60} 
            shoppingName={'tank'} 
            publisher={'星空下的仰望'} 
            imgList={[iconSpiro, iconCup, iconSpiro, iconCup]}
            point={100} 
            location={'南京南京'} />
        }>
        {/*
          <Text style={{ padding: 10 }}>Hello, Navigation!</Text>
          <Button
            onPress={() => {
              navigate('Login', { user: 'Sybil' });
            }}
            title="点击跳转" />
        */}
          
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