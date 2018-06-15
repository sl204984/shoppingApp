import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Avator from './avator';
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
        <Avator navigate={navigate} />
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
