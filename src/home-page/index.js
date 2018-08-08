import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, Text, Image } from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数

import ShoppingItem from '../utils/goods-item';
import { homePageActions, loginActions } from '../../actions';
import SearchBox from './search-box';
import ClassifyList from './classify-list';
import { indexStyles as styles } from './styles';

class HomePage extends Component {
  state = {
    refreshing: false,
    loadingStatus: false,
    pageNum: 0,
    pageSize: 10,
    curTabIndex: 0
  }

  componentDidMount() {
    this._initDataList();
    
  }

  render() {
    const { data = [], navigation, end } = this.props;
    const { refreshing, curTabIndex } = this.state;

    return (
      <View style={styles.container}>
        <SearchBox navigation={navigation} />
        <ClassifyList 
          curTabIndex={curTabIndex}  
          changeTab={async curTabIndex => {
            await this.setState({ curTabIndex });
            this._initDataList();
          }}
        />
        <FlatList 
          data={data} 
          ListEmptyComponent={this._renderEmpty}
          // ListHeaderComponent={this._renderHeader}
          renderItem={this._renderItem}
          ListFooterComponent={this._renderFooter}
          onRefresh={this._initDataList}
          refreshing={refreshing}
          onEndReached={data.length < 100 && !end && this._addDataList}
          // onEndReachedThreshold={0.1}
        />
      </View>
    )
  }

  _renderItem = ({ item }) => (
    <ShoppingItem avatar={item.avatar} 
      price={item.price} 
      shoppingName={item.shoppingName || []} 
      publisher={item.publisher} 
      imgList={item.imgList}
      point={item.point} 
      location={item.location || ''} 
      onPress={() => { this._navigateToDetail(item); }}
      onLongPress={() => {}}
    />
  )

  _renderEmpty = () => {
    const { refreshing } = this.state;
    if(refreshing) return null;
    return (
      <View style={styles.emptyBox}>
        <Text style={styles.textGray}>数据不见了？！</Text>
        <Image source={require('../local-imgs/no-server.png')} />
      </View>
    )
  }

  _renderHeader = () => {
    const { refreshing, loadingStatus } = this.state;
    if(refreshing || loadingStatus) return null;
    return (
      <View />
    )
  }

  _renderFooter = () => {
    const { data = [] } = this.props;
    const { refreshing, loadingStatus } = this.state;
    if(refreshing || data.length === 0) return null;
    if(loadingStatus) { // 加载等待页
      return (
        <View style={styles.loadingBox}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }
    return (
      <View style={styles.footerBox}>
        <View style={styles.footerMidLine} />
        <Text style={styles.footerText}>其实我也是有底线的</Text>
        <View style={styles.footerMidLine} />
      </View>
    )
  }

  _initDataList = async () => {
    const { initDataList } = this.props;
    const { refreshing, pageSize, curTabIndex } = this.state;
    if(refreshing) return;
    this.setState({ refreshing: true });
    await initDataList({ pageSize, pageNum: 0,  });
    this.setState({ refreshing: false, pageNum: 1, type: curTabIndex });
  }

  _addDataList = async () => {
    const { addDataList } = this.props;
    const { loadingStatus, pageSize, pageNum, curTabIndex } = this.state;
    if(loadingStatus) return;
    this.setState({ loadingStatus: true });
    await addDataList({ pageSize, pageNum });
    this.setState({ loadingStatus: false, pageNum: pageNum + 1, type: curTabIndex });
  }

  _navigateToDetail = item => {
    const { navigation } = this.props;
    navigation.navigate('GoodsDetail', {
      goodsDetail: item
    });
  }
}

export default connect(
  (state) => ({
    data: state.homePageReducer.data,
    end: state.homePageReducer.end,
    loginInfo: state.loginReducer.loginInfo
  }),
  dispatch => ({
    initDataList: params => dispatch(homePageActions.initDataList(params)),
    addDataList: params => dispatch(homePageActions.addDataList(params)),
    fetchLoginInfo: () => dispatch(loginActions.initLoginInfo())
  })
)(HomePage);
