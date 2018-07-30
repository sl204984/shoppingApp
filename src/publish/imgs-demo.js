import React, { Component } from 'react';

import { 
  View, 
  StyleSheet, 
  ScrollView, 
  Image, 
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';

import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/Ionicons';

import { lightGray, baseColor } from "../utils/common-styles";

// 选择图片配置项
const ImagePickerOpt = {
  title: '选择图片',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '从图库选择',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class ImgsDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      imgList = []
    } = this.props;
    return (
      <View style={styles.scrowView} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            imgList.map((item, index) => <Image key={index} source={item} style={styles.img} />)
          }
          <TouchableOpacity style={styles.addImg} onPress={this._selectImg} >
            <Icon name="md-add" size={36} color={baseColor} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }

  _selectImg = () => {
    // showImagePicker ===> 弹出选择相机、相册框
    // launchImageLibrary ===> 弹出相册
    // ImagePicker.launchCamera 弹出相机
    ImagePicker.showImagePicker(ImagePickerOpt, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {

        let source;

        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true}
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true}
        }
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  _launchCamera = () => {
    ImagePicker.launchCamera(ImagePickerOpt, (response)  => {
      // Same code as in above section!
      console.log('Response = ', response);
    });
  }

  _launchImageLibrary = () => {
    ImagePicker.launchImageLibrary(ImagePickerOpt, (response)  => {
      // Same code as in above section!
      console.log('Response = ', response);
    });
  }
}

const { width } = Dimensions.get('window');

const imgWidth = 60;
const imgMargin = 5;

const styles = StyleSheet.create({
 
  scrowView: {
    width: width,
    height: imgWidth + imgMargin * 2
  },
  img: {
    width: imgWidth,
    height: imgWidth,
    margin: imgMargin
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
  },

});