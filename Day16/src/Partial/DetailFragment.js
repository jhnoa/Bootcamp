// @flow

import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from '../Style';

type ImageObject = {
  id: string,
  link: string,
  title: string,
  description: string,
};

type Props = {
  item: ImageObject,
};

export default class DetailFragment extends Component<Props> {
  render() {
    return (
      <View style={Style.detailViewFrag}>
        <Image
          style={Style.detailViewImage}
          source={{uri: this.props.item.link}}
        />
        <Text>{this.props.item.title}</Text>
      </View>
    );
  }
}
