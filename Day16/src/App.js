import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Style from './Style';
import SearchBar from './Partial/SearchBar';
import NotificationBar from './Partial/NotificationBar';

type State = {
  imgUrlList: Map<string, boolean>,
};

export default class App extends Component<{}, State> {
  state = {
    urlList: new Map(),
  };
  onSearchClicked = (text) => {
    this.setState({
      urlList: this.state.urlList.set(text, false),
    });
  };
  render() {
    let test = () => {};
    return (
      <View style={Style.container}>
        <NotificationBar />
        <SearchBar onSearch={this.onSearchClicked} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
