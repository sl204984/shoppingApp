import React, { Component } from "react";
import Platform from "Platform";
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数

import ShoppingItem from '../utils/shopping-item';
import { homePageActions } from '../../actions';
class HomePage extends Component {

  componentDidMount() {
    // this.store.init();
  }

  render() {
    const { data = [] } = this.props;
    console.log('data', data)
    return (
      <View style={styles.container}>
        <Text onPress={this._initDataList}>aaa</Text>
        <FlatList data={data} renderItem={({item}) => 
          <ShoppingItem avatar={item.avatar} 
            price={item.price} 
            shoppingName={item.shoppingName || []} 
            publisher={item.publisher} 
            imgList={item.imgList}
            point={item.point} 
            location={item.location || ''} />
        }>
          
        </FlatList>
      </View>
    )
  }

  _initDataList = async () => {
    const { initDataList } = this.props;
    const res = await initDataList();
    console.log('home-page-res', res);
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

export default connect(
  (state) => ({
    data: state.homePageReducer.data,
  }),
  dispatch => ({
    initDataList: () => dispatch(homePageActions.initDataList()),
  })
)(HomePage);
