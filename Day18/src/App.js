import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Expo, {Font} from 'expo';

type State = {
  fontLoaded: boolean,
  startTime: ?number,
  currentTime: number,
  lap: Array<number>,
};

export default class App extends Component<{}, State> {
  state = {
    fontLoaded: false,
    startTime: null,
    currentTime: 0,
    lap: [],
  };
  timer;
  componentDidMount() {
    this._loadFont();
  }

  render() {
    let timerView = this._timerShow();
    let buttonBar = this._buttonBarShow();
    let lapView = this._lapView();
    return (
      <View style={styles.container}>
        <View style={styles.divider}>{timerView}</View>
        <View style={styles.divider}>{[buttonBar, lapView]}</View>
      </View>
    );
  }

  _loadFont = async () => {
    await Expo.Font.loadAsync({
      spaceMono: require('./SpaceMono-Regular.ttf'),
    });
    this.setState({
      fontLoaded: true,
    });
  };
  _toMMSSSS = (time: number) => {
    let tSecond = time / 1000;
    let minutes = Math.floor(tSecond / 60);
    let seconds = (tSecond % 60).toFixed(2);

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  };
  _timerShow = () => {
    let {fontLoaded, startTime, currentTime} = this.state;
    let time = startTime != null ? currentTime - startTime : 0;
    return fontLoaded ? (
      <Text style={styles.timer}>{this._toMMSSSS(time)}</Text>
    ) : (
      <Text>{this._toMMSSSS(time)}</Text>
    );
  };
  _buttonBarShow = () => {
    let startOrStop =
      this.state.startTime != null ? (
        <View style={[styles.button, styles.red]}>
          <Text>STOP</Text>
        </View>
      ) : (
        <View style={[styles.button, styles.blue]}>
          <Text>START</Text>
        </View>
      );

    let lapPress = this.state.startTime != null ? this._lapPress : null;
    return (
      <View key={Math.random()} style={styles.buttonBar}>
        <TouchableWithoutFeedback onPress={() => lapPress()}>
          <View style={[styles.button, styles.grey]}>
            <Text>LAP</Text>
          </View>
        </TouchableWithoutFeedback>;
        <TouchableWithoutFeedback onPress={() => this._toggleTimer()}>
          {startOrStop}
        </TouchableWithoutFeedback>;
      </View>
    );
  };
  _toggleTimer = () => {
    if (this.state.startTime == null) {
      this.setState((state) => {
        timer = setInterval(() => {
          this.setState((state) => {
            return {
              ...state,
              currentTime: Date.now(),
            };
          });
        }, 33);
        return {
          ...state,
          startTime: Date.now(),
          currentTime: Date.now(),
        };
      });
    } else {
      this.setState((state) => {
        clearInterval(timer);
        return {
          ...state,
          startTime: null,
          currentTime: 0,
          lap: [],
        };
      });
    }
  };
  _lapPress = () => {
    let {lap, startTime, currentTime} = this.state;
    let laps = [...lap, currentTime - startTime];
    this.setState((state) => {
      return {
        lap: laps,
      };
    });
  };
  _lapView = () => {
    return (
      <ScrollView key={Math.random()} style={styles.lapView}>
        {this.state.lap.map((time, index) => {
          return (
            <View style={styles.lapRow} key={index}>
              <Text style={styles.lapText}>{this._toMMSSSS(time)}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  timer: {
    fontFamily: 'spaceMono',
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
  },
  divider: {
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grey: {
    backgroundColor: 'grey',
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  lapView: {
    height: '30%',
  },
  lapRow: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: 'grey',
  },
  lapText: {
    fontSize: 15,
  },
});
