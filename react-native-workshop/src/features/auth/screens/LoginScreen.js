// @flow

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import type {
  NavigationScreenProp,
  NavigationStateRoute,
} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<NavigationStateRoute>;
};

class LoginScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Text>To Main Screen</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('HomeScreen', {
              userID: 86,
            });
          }}
        />
      </View>
    );
  }
}

export default LoginScreen;
