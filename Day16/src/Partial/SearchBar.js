// @flow

import React, {Component} from 'react';
import {View, TextInput, Button, TouchableWithoutFeedback} from 'react-native';
import Style from '../Style';

type Props = {
  onSearch: (string) => void,
  onBack: () => void,
};

type State = {
  value: string,
};

export default class SearchBar extends Component<Props, State> {
  state = {
    value: '',
  };
  _onTextChange = (text: string) => {
    this.setState({
      value: text,
    });
  };
  render() {
    return (
      <View style={Style.searchView}>
        <TouchableWithoutFeedback onPress={() => this.props.onBack()}>
          <View style={Style.backButton} />
        </TouchableWithoutFeedback>
        <View style={Style.searchBarView}>
          <TextInput
            style={Style.searchBar}
            underlineColorAndroid="transparent"
            placeholder="Search"
            value={this.state.value}
            onChangeText={this._onTextChange}
          />
          <Button
            title="Search"
            onPress={() => this.props.onSearch(this.state.value)}
            disabled={this.state.value ? false : true}
          />
        </View>
      </View>
    );
  }
}
