import React, {Component} from 'react';
import {View} from 'react-native';
import Style from '../Style';

export default class NotificationBar extends Component<{}> {
  render() {
    return <View style={Style.notificationBar} />;
  }
}
