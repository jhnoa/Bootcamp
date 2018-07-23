// @flow

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Style from '../Style';

type Props = {
  id: string,
  link: string,
};

export default class DetailFragment extends Component<Props> {
  render() {
    return (
      <View style={Style.detailViewFrag}>
        <Image style={Style.detailViewImage} source={this.props.link} />
        <Text>DetailFragment</Text>
      </View>
    );
  }
}
