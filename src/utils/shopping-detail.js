import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ShoppingDetail extends Component {
  render() {
    const { shoppingName, state, imgSrc, location, spec } = this.props;
    return (
      <View style={style.wrap}>

        <View style={style.imageWrap}>
          <View style={style.square} />
          <View style={style.imageInner}>
            <Image style={style.image} source={this.props.imgSrc} />
          </View>
        </View>


        <View>
          <Text style={style.shoppingName}>
            {shoppingName}
          </Text>
          <Text>
            {state}
          </Text>
        </View>

        <View style={style.shoppingDetail}>
          <Text style={style.shoppingPrice}>
            ￥ {this.props.shoppingPrice}
          </Text>
          <Text style={style.shoppingOwner}>
            {this.props.shoppingOwner} 人已拥有
          </Text>
        </View>
      </View>
    )
  }
}

const padding = 10;

const style = StyleSheet.create({
  wrap: {
    width: '100%'

  },

  imageWrap: {
    position: 'relative',
  },
  square: {
    height: 0,
    width: '100%',
    paddingBottom: '100%',
  },
  imageInner: {
    width: '100%',
    height: '100%',
    padding,
    position: 'absolute',
    left: 0,
    top: 0
  },
  image: {
    width: '100%',
    height: '100%'
  },

  shoppingName: {
    height: 40,
    padding
  },

  shoppingDetail: {
    padding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shoppingPrice: {
    color: 'red',
  },
  shoppingOwner: {
    color: '#aaa'
  }
});