import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Style from './Style';
import SearchBar from './Partial/SearchBar';
import NotificationBar from './Partial/NotificationBar';
import ImageView from './Partial/ImageView';

type ImageObject = {
  id: string,
  link: string,
  title: string,
  description: string,
};

type State = {
  searchText: string,
  favorite: Array<ImageObject>,
  pages: string,
};

export default class App extends Component<{}, State> {
  state = {
    searchText: '',
    favorite: [],
    pages: 'main',
  };
  onSearchClicked = (text) => {
    this.setState({
      searchText: text,
    });
  };

  onFavorite = (text) => {
    let index = this.state.favorite.findIndex((s) => s === text);
    console.log(index, text);
    if (index === -1) {
      console.log('ADD');
      this.setState({
        favorite: [...this.state.favorite, text],
      });
    } else {
      console.log('REMOVE');
      let newArray = [...this.state.favorite];
      newArray.splice(index, 1);
      this.setState({
        favorite: newArray,
      });
    }
  };

  _showPages = (pages) => {
    if (pages === 'main') {
      return (
        <View style={Style.container}>
          <NotificationBar />
          <SearchBar onSearch={this.onSearchClicked} />
          <ScrollView>
            <ImageView
              searchText={this.state.searchText}
              fav={this.state.favorite}
              onFavorite={this.onFavorite}
            />
          </ScrollView>
        </View>
      );
    }
  };

  render() {
    console.log('APP RENDER');
    return this._showPages(this.state.pages);
  }
}
