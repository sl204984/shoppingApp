import React, { Component } from 'react';

import { 
  View, 
  StyleSheet, 
  ScrollView, 
  Image, 
  Dimensions,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import { lightGray, baseColor, white } from "../utils/common-styles";

export default class ImgsDemo extends Component {

  render() {
    const {
      imgList = []
    } = this.props;
    return (
      <View style={styles.scrowView} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {imgList.map((item, index) => (
            <View style={styles.imgBox} key={index}>
              <Image source={{ uri: item.path }} style={styles.img} />
              <TouchableOpacity style={styles.delImg} onPress={() => {
                this._delImage(index);
              }}>
                <Icon name="md-close" size={delImgWidth - 2} color={white} />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.addImg} onPress={this._selectImage} >
            <Icon name="md-add" size={36} color={baseColor} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }

  _selectImage = () => {
    const { changeImgs, maxFiles } = this.props;
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      minFiles: 1,
      maxFiles: maxFiles
    }).then(images => {
      changeImgs(images);
    });
  }

  _delImage = index => {
    const { imgList = [], changeImgs } = this.props;
    imgList.splice(index, 1);
    changeImgs(imgList);
  }
}

const { width } = Dimensions.get('window');

const imgWidth = 60;
const imgMargin = 5;
const delImgWidth = 20;

const styles = StyleSheet.create({
  scrowView: {
    width: width,
    height: imgWidth + imgMargin * 2
  },
  imgBox: {
    position: 'relative'
  },
  img: {
    width: imgWidth,
    height: imgWidth,
    margin: imgMargin
  },
  delImg: {
    width: delImgWidth,
    height: delImgWidth,
    borderRadius: delImgWidth / 2,
    backgroundColor: baseColor,
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: white
  },
  addImg: {
    width: imgWidth,
    height: imgWidth,
    margin: imgMargin - 2,
    borderWidth: 1,
    borderColor: lightGray,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});