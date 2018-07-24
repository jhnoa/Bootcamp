// @flow

import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from '../Style';

type Props = {
  onPress: (string) => void,
};

let MainMenu = (props: Props) => {
  return (
    <View style={Style.mainMenuView}>
      <TouchableWithoutFeedback onPress={() => props.onPress('main')}>
        <View style={Style.mainMenuItem}>
          <Text style={Style.mainMenuText}>Search</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => props.onPress('detail')}>
        <View style={Style.mainMenuItem}>
          <Text style={Style.mainMenuText}>Favorite</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MainMenu;
