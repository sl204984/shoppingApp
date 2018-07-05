import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Avator from './components/avator';
import Appreciate from './components/appreciate';
import FeatureList from './components/feature-list';
import Setting from './components/setting';

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
