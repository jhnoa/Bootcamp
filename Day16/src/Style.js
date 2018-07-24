// @flow

import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  notificationBar: {
    paddingTop: 20,
    backgroundColor: 'maroon',
    alignSelf: 'stretch',
  },
  mainMenuView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#123232',
    justifyContent: 'space-around',
  },
  mainMenuItem: {
    width: '60%',
    height: 140,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  mainMenuText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    backgroundColor: 'white',
  },
  searchView: {
    backgroundColor: 'aqua',
    padding: 10,
    flexDirection: 'row',
  },
  backButton: {
    width: 70,
    height: 70,
    backgroundColor: 'green',
  },
  searchBarView: {
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
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
