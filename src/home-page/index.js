import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { container } from "../utils/common-styles";

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{ padding: 10 }}>Hello, Navigation!</Text>
        <Button
          onPress={() => {
            navigate('Login', { user: 'Sybil' });
          }}
          title="点击跳转" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: container.toJS(),
});