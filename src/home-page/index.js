import React, { Component } from "react";
import Platform from "Platform";
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数

import ShoppingItem from '../utils/shopping-item';
import { homePageActions } from '../../actions';
class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.store.init();
  }

  render() {
    const { data = [], initDataList } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={initDataList}>aaa</Text>
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

export default connect(
  (state) => ({
    data: state.homePageReducer.data,
  }),
  dispatch => ({
    initDataList: () => dispatch(homePageActions.initDataList()),
  })
)(HomePage);
