import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home/Home';
import Login from './src/components/Login/Login';
import PetTaxi from './src/components/PetTaxi/PetTaxi';
import PetTaxiConfirm from './src/components/PetTaxi/PetTaxiConfirm';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PetTaxi" component={PetTaxi} />
        <Stack.Screen name="PetTaxiConfirm" component={PetTaxiConfirm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
