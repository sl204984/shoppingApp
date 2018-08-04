import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { container } from "../utils/common-styles";
import ImagePicker from "react-native-image-picker";

const options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class Category extends Component {

  state = {
    avatarSource: 'avatarSource'
  }

  render() {
    return <View style={styles.container}>
      <Text onPress={this._selectImg}>Here category is!</Text>
    </View>
  }

  _selectImg = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source
        });
      }
    });
  }
}

const styles = StyleSheet.create({
  container: container.toJS()
});