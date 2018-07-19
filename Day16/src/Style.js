// @flow

import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  notificationBar: {
    paddingTop: 20,
    backgroundColor: 'maroon',
    alignSelf: 'stretch',
  },
  searchBarView: {
    alignSelf: 'stretch',
    padding: 10,
    display: 'flex',
  },
  searchBar: {
    padding: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 5,
  },
  imageView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
