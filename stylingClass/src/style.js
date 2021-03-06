// @flow
import {StyleSheet, Text, View} from 'react-native';

let style = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // paddingTop: 20,
  },
  header: {
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headBtn: {
    width: 30,
    height: 30,
    backgroundColor: 'aqua',
  },
  headText: {
    fontSize: 14,
    fontWeight: '600',
  },
  body: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'space-between',
  },
  upperBody: {
    height: 100,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  upperBodyContent: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
  },
  lowerBody: {
    backgroundColor: 'maroon',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    padding: 15,
  },
  lowerBodyTitle: {
    fontSize: 33,
    fontWeight: '700',
    color: 'skyblue',
  },
  friendListView: {
    flex: 1,
    margin: 15,
    overflow: 'scroll',
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'stretch',
    padding: 20,
  },
  friend: {
    height: 80,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderColor: 'black',
    borderWidth: 1,
  },
  friendPP: {
    height: 50,
    width: 50,
    borderRadius: 35,
    backgroundColor: 'white',
  },
  friendName: {
    marginHorizontal: 15,
    fontSize: 40,
  },
};

export default style;
