// @flow

import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fdf',
    alignItems: 'center',
    flexDirection: 'column',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    minHeight: 0,
    backgroundColor: '#459966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
  },
  favorite: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'blue',
  },
  detailViewFrag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'stretch',
    alignItems: 'center',
  },
  detailViewImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'auto',
  },
});

export default style;
