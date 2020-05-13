/**
 * @format
 */
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Login from './src/components/Login/Login';
import Secured from './src/components/Secured/Secured';

// class Pawws extends Component {
//     state = {
//         isLoggedIn: false,
//     };

//     render() {
//         if (this.state.isLoggedIn)
//             return <Secured
//                 onLogoutPress={() => this.setState({ isLoggedIn: false })} />;
//         else
//             return <Login
//                 onLoginPress={() => this.setState({ isLoggedIn: true })} />;

//     }
// }

AppRegistry.registerComponent(appName, () => App);
