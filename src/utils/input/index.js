import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
import { baseColor } from '../common-styles';
const AnimatedView = Animated.View;

export default class InputText extends Component {
  state = {
    blinkAnim: new Animated.Value(0)
  }

  render() {
    const { value, focused } = this.props;
    const { blinkAnim } = this.state;
    focused ? this.startAnimate() : this.stopAnimate();
    return (
      <View style={styles.container}>
        <Text>{ value }</Text>
        {focused ? (
          <AnimatedView style={[styles.inputCursor, { opacity: blinkAnim }]} />
        ) : null}
      </View>
    )
  }

  startAnimate = () => {
    Animated.loop(
      Animated.timing(
        this.state.blinkAnim, {
          toValue: 1,
          easing: Easing.back(),
          duration: 1000
        }
      )
    ).start();
  }

  stopAnimate = () => {
    Animated.stop();
    this.setState({ blinkAnim: new Animated.value(0) });
  }
}

const inputH = 18;
const styles = StyleSheet.create({
  container: {
    height: inputH,
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputCursor: {
    width: 1, 
    height: inputH, 
    backgroundColor: baseColor
  }
});