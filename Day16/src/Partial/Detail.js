// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
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
  onBack: () => void,
};

export default class Detail extends Component<Props> {
  render() {
    console.log('DETAIL RENDER');
    return (
      <View>
        <View style={Style.searchView}>
          <TouchableWithoutFeedback onPress={() => this.props.onBack()}>
            <View style={Style.backButton} />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          {this.props.images.map((obj) => {
            return <DetailFragment key={obj.link} item={obj} />;
          })}
        </ScrollView>
      </View>
    );
  }
}
