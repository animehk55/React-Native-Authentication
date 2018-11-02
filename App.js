import React, {Component} from 'react';
import { View} from 'react-native';
// import firebase from 'firebase';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDpC3MY8oU6rveSP6DNVyWAfYLPRJIuajU',
      authDomain: 'authenticationfirenative.firebaseapp.com',
      databaseURL: 'https://authenticationfirenative.firebaseio.com',
      projectId: 'authenticationfirenative',
      storageBucket: 'authenticationfirenative.appspot.com',
      messagingSenderId: '572832231141'
    });
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;