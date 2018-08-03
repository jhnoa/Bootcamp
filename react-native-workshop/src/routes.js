import {createStackNavigator} from 'react-navigation';
import LoginScreen from './features/auth/screens/LoginScreen';
import HomeScreen from './features/repository/screens/HomeScreen';
import NotificationScreen from './features/repository/NotificationScreen';
import SearchScreen from './features/search/SearchScreen';
import ProfileScreen from './features/';

let appScreen = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    NotificationScreen: {
      screen: NotificationScreen,
    },
    SearchScreen: {
      screen: SearchScreen,
    },
    ProfileScreen: {
      screen: ProfileScreen,
    },
    RepositoriesScreen: {
      screen: RepositoriesScreen,
    },
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

export default appScreen;
