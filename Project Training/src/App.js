// @flow
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>testing</Text>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
  },
});
