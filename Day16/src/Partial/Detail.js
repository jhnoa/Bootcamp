// @flow

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Style from '../Style';
import DetailFragment from './DetailFragment';

type ImageObject = {
  id: string,
  link: string,
  title: string,
  description: string,
};

type Props = {
  images: Array<ImageObject>,
};

export default class Detail extends Component<Props> {
  render() {
    return (
      <ScrollableView>
        {this.props.images.map((obj) => {
          return <DetailFragment item={obj} />;
        })}
      </View>
    );
  }
}
