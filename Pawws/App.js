import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/components/Home/Home';
import Login from './src/components/Login/Login';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },

  },
  {
    initialRouteName: 'Login',
  });
const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AppContainer />
  );
};



export default App;
