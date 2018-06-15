import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { baseColor, lightGray, red } from "./common-styles";

export default class ShoppingList extends Component {
  render() {
    return (
      <View style={style.wrap}>

        <View style={style.column}>
          <View style={style.imageWrap}>
            <Image style={style.image} source={this.props.imgSrc} />
          </View>

          <View style={style.details}>
            <Text style={style.shoppingName}>
              {this.props.shoppingName}
            </Text>

            <Text style={style.location}>
              {this.props.location}
            </Text>

            <View style={style.specWrap}>
              {
                this.props.spec.filter((item, index) => {
                  return index < 4
                }).map((item, key) => (
                  <Text key={key} style={style.specItem}>
                    {item}
                  </Text>
                ))
              }
            </View>
          </View>
        </View>

        <View style={style.otherInfo}>
          <Text style={style.shoppingPrice}>
            ￥ {this.props.shoppingPrice} /月
          </Text>
          <Text style={style.shoppingOwner}>
            {this.props.buildingType}
          </Text>
        </View>
      </View>
    )
  }
}

const padding = 10;
const square = 80;

const style = StyleSheet.create({
  wrap: {
    width: '100%'
  },

  column: {
    padding,
    paddingBottom: 0,
    width: '100%',
    flexDirection: 'row'
  },

  imageWrap: {
    width: square,
    height: square,
    backgroundColor: 'lightgreen'
  },
  image: {
    width: '100%',
    height: '100%'
  },

  details: {
    flex: 1,
    paddingLeft: padding,
    paddingRight: padding
  },

  shoppingName: {
    height: 35,
    overflow: 'hidden',
  },

  location: {
    height: 20,
    overflow: 'hidden',
    color: '#666',
    marginBottom: 5,
    fontSize: 12
  },

  specWrap: {
    flexDirection: 'row'
  },

  specItem: {
    borderRadius: 3,
    borderColor: baseColor,
    borderWidth: 1,
    marginRight: 5,
    color: baseColor,
    fontSize: 12,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    paddingBottom: 1
  },

  otherInfo: {
    padding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shoppingPrice: {
    color: red,
  },
  shoppingOwner: {
    color: lightGray
  }
});