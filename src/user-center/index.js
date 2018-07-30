import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Avatar from './avatar';
import Appreciate from './appreciate';
import FeatureList from './feature-list';
import Setting from './setting';

export default class UserCenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <ScrollView style={styles.container}>
        <Avatar navigate={navigate} />
        <Appreciate navigate={navigate} />
        <FeatureList navigate={navigate} />
        <Setting navigate={navigate} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
});
