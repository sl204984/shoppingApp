import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text, Animated, StyleSheet, Easing } from 'react-native';
import { baseColor } from '../common-styles';
const AnimatedView = Animated.View;

export default class InputText extends Component {
  state = {
    blinkAnim: new Animated.Value(0)
  }

  componentWillUnmount() {
    if(Animated.stop) {
      Animated.stop();
      this.setState({ blinkAnim: new Animated.Value(0) });
    }
  }

  render() {
    const { value, focused, setFocus, name } = this.props;
    const { blinkAnim } = this.state;
    const isFocused = focused === name;
    isFocused ? this.startAnimate() : this.stopAnimate();
    return (
      <TouchableWithoutFeedback onPress={() => {
        typeof setFocus === 'function' && setFocus(name);
      }}>
        <View style={styles.container}>
          <Text>{ value }</Text>
          {isFocused ? (
            <AnimatedView style={[styles.inputCursor, { opacity: blinkAnim }]} />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
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
    if(Animated.stop) {
      Animated.stop();
      this.setState({ blinkAnim: new Animated.Value(0) });
    }
  }
}

const inputH = 18;
const styles = StyleSheet.create({
  container: {
    height: inputH,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  inputCursor: {
    width: 2, 
    height: inputH, 
    backgroundColor: baseColor
  }
});