//@flow

import React, {Component} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import Style from '../Style';

type ImageObject = {
  id: string,
  link: string,
  title: string,
  description: string,
};

type OnFavorite = (ImageObject) => void;

type Props = {
  searchText: string,
  fav: Array<string>,
  onFavorite: OnFavorite,
};

type State = {
  lastSearch: string,
  images: Array<ImageObject>,
};

export default class ImageView extends Component<Props, State> {
  state = {
    lastSearch: '',
    images: [],
  };

  loadImage = async (text: string) => {
    console.log('loading Image');
    let url = `https://api.imgur.com/3/gallery/search/?q=${text}`;
    let head = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Client-ID dc7630e45080d85',
      },
    });
    // console.log(head);
    let body = await head.json();
    // console.log(body);
    let array = [];
    let arrayOfImagesObject = await body.data.map((obj) => {
      return obj.images;
    });
    await arrayOfImagesObject.forEach((obj) => {
      if (Array.isArray(obj)) {
        let newObj = {
          id: obj[0].id,
          link: obj[0].link,
          title: obj[0].title,
          description: obj[0].description,
        };
        array.push(newObj);
      }
    });
    this.setState({
      lastSearch: text,
      images: array,
    });
  };

  render() {
    console.log('IMAGE VIEW RENDER');
    let {searchText} = this.props;
    if (this.props.searchText !== this.state.lastSearch) {
      this.loadImage(searchText);
    }
    let {images} = this.state;
    let favorite = this.state.images.map(
      (obj) => (this.props.fav.includes(obj) ? true : false),
    );

    return (
      <View style={Style.imageView}>
        {images.map((uri, index) => (
          <View key={uri.link} style={Style.image}>
            <TouchableWithoutFeedback
              onPress={() => {
                this.props.onFavorite(uri);
              }}
            >
              <Image source={{uri: uri.link}} style={Style.image} />
            </TouchableWithoutFeedback>
            {favorite[index] ? <View style={Style.favorite} /> : <View />}
          </View>
        ))}
      </View>
    );
  }
}
