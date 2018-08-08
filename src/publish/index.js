import React, { Component } from 'react';
import {
  ScrollView, 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity
} from 'react-native';
import Toast from 'react-native-root-toast';

import { 
  container, 
  longConfirmBtn, 
  submitTextColor, 
} from "../utils/common-styles";

import HeaderTitle from './header-title';
import Detail from './detail';
import ImgsDemo from './imgs-demo';
import Price from './price';
import Count from './count';
import Store from './store';
import Classification from './classification';
import Location from './location';

import { uploadImages } from './api';

const maxFiles = 5;

export default class PublishDemo extends Component {
  state = {
    shoppingName: '',
    userId: '',
    shoppingId: '',
    price: '',
    shipFee: '', // 邮费
    count: '',
    store: '',
    desc: '',
    imgList: [],
    location: '',
    type: 0
  }

  render() {
    const {
      shoppingName,
      desc,
      imgList,
      price,
      shipFee,
      count,
      store,
      type
    } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <HeaderTitle 
            value={shoppingName}
            changeValue={val => {
              this.setState({ shoppingName: val });
            }}
          />

          <Detail
            value={desc}
            changeValue={val => {
              this.setState({ desc: val });
            }} />

          <ImgsDemo 
            imgList={imgList} 
            changeImgs={imgList => this.setState({ imgList })} 
            maxFiles={maxFiles}
          />

          <Price 
            price={price} 
            shipFee={shipFee}
            changePrice={({ price, shipFee }) => this.setState({ 
              price, shipFee 
            })} 
          />

          <Count
            count={count}
            changeCount={({ count }) => this.setState({ count })} 
          />

          <Classification 
            value={type} 
            changeType={({ type }) => this.setState({ type })} 
          />

          <Store 
            store={store} 
            changeStore={({ store }) => this.setState({ store })}
          />
          <Location />

          <TouchableOpacity style={styles.loginBox} onPress={ async () => {
            if (imgList.length === 0) {
              Toast.show('请选择商品图片~', {
                position: Toast.positions.CENTER
              });
              return;
            } else if (imgList.length > maxFiles) {
              Toast.show(`最多可上传${maxFiles}张图片`, {
                position: Toast.positions.CENTER
              });
              return;
            }
            const files = imgList.map((item, index) => {
              const imgType = item.mime && item.mime.split('/')[1];
              return {
                path: item.path,
                filename: 'sl204984_' + index + '.' + (imgType || 'jpeg') // 命名规则：订单号 + 索引 + 文件类型
              }
            });
            const res = await uploadImages({ files });
          }}>
            <Text style={styles.loginText}>确定发布</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: container.toJS(),
  loginBox: longConfirmBtn.toJS(),
  loginText: {
    color: submitTextColor
  },
});