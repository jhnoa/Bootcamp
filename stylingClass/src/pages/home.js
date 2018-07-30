// @flow
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import style from '../style';
import type {NavigationState} from 'react-navigation/src/TypeDefinition';

type Props = {
  navigation: NavigationState,
};
type State = {
  name: Array<{name: string}>,
};

export default class home extends Component<Props, State> {
  static navigationOptions = {
    title: 'Facebook Profile',
  };
  state = {
    name: [
      {
        name: 'Johan',
      },
      {
        name: 'Arie',
      },
      {
        name: 'Astrid',
      },
      {
        name: 'Deandra',
      },
      {
        name: 'Aji',
      },
    ],
  };
  render() {
    return (
      <View style={style.container}>
        {/* <View style={style.header}>
        <Text style={style.headBtn}>Back</Text>
        <Text style={style.headText}>Facebook Profile</Text>
        <Text style={style.headBtn}>Share</Text>
      </View> */}
        <View style={style.body}>
          <View style={style.upperBody}>
            <Text style={style.upperBodyContent}>Profile Pict</Text>
            <Text style={style.upperBodyContent}>Add Friend</Text>
          </View>
          <View style={style.lowerBody}>
            <Text style={style.lowerBodyTitle}>Friend List</Text>
            <View style={style.friendListView}>
              <ScrollView>
                {this.state.name.map((obj, index) => {
                  return (
                    <TouchableOpacity
                      style={style.friend}
                      key={index}
                      onPress={() =>
                        this.props.navigation.navigate('Profile', {
                          name: obj.name,
                        })
                      }
                    >
                      <View style={style.friendPP} />
                      <Text style={style.friendName}>{obj.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
