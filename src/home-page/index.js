import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions, ActivityIndicator, Text, Image } from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数

import ShoppingItem from '../utils/shopping-item';
import { textGrayColor, paddingTop } from '../utils/common-styles';
import { homePageActions } from '../../actions';
import SearchBox from './search-box';
import ClassifyList from './classify-list';

const { width } = Dimensions.get('window');
class HomePage extends Component {

  state = {
    refreshing: false,
    loadingStatus: false,
    pageNum: 0,
    pageSize: 8,
    curTabIndex: 0
  }

  componentDidMount() {
    this._initDataList();
  }

  render() {
    const { data = [] } = this.props;
    const { refreshing, curTabIndex } = this.state;
    return (
      <View style={styles.container}>
        <SearchBox />
        <ClassifyList 
          curTabIndex={curTabIndex}  
          changeTab={curTabIndex => {
            this.setState({ curTabIndex });
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
          onEndReached={this._addDataList}
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
      location={item.location || ''} />
  )

  _renderEmpty = () => {
    const { refreshing } = this.state;
    if(refreshing) return null;
    return (
      <View style={styles.emptyBox}>
        <Text style={styles.textGray}>数据不见了？！</Text>
        <Image source={require('../local-imgs/no-server.png')}></Image>
      </View>
    )
  }

  _renderHeader = () => {
    const { refreshing, loadingStatus } = this.state;
    if(refreshing || loadingStatus) return null;
    return (
      <View style={styles.footerBox}>
        <View style={styles.footerMidLine} />
        <Text style={styles.footerText}>其实这是顶部</Text>
        <View style={styles.footerMidLine} />
      </View>
    )
  }

  _renderFooter = () => {
    const { refreshing, loadingStatus } = this.state;
    if(refreshing) return null;
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
        <Text style={styles.footerText}>emm，其实我也是有底线的</Text>
        <View style={styles.footerMidLine} />
      </View>
    )
    
  }

  _initDataList = async () => {
    const { initDataList } = this.props;
    const { refreshing, pageSize } = this.state;
    if(refreshing) return;
    this.setState({ refreshing: true });
    await initDataList({ pageSize, pageNum: 0 });
    this.setState({ refreshing: false, pageNum: 1 });
  }

  _addDataList = async () => {
    const { addDataList } = this.props;
    const { loadingStatus, pageSize, pageNum } = this.state;
    if(loadingStatus) return;
    this.setState({ loadingStatus: true });
    await addDataList({ pageSize, pageNum });
    this.setState({ loadingStatus: false, pageNum: pageNum + 1 });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    paddingTop: paddingTop,
  },
  loadingBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  emptyBox: {
    width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBox: {
    width: '100%',
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerMidLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: textGrayColor
  },
  footerText: {
    color: textGrayColor,
    marginLeft: 20,
    marginRight: 20
  },
  textGray: {
    color: textGrayColor
  }
});

export default connect(
  (state) => ({
    data: state.homePageReducer.data,
  }),
  dispatch => ({
    initDataList: params => dispatch(homePageActions.initDataList(params)),
    addDataList: params => dispatch(homePageActions.addDataList(params)),
  })
)(HomePage);
