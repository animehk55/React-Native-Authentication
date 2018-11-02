import React, {Component} from 'react';
import { View} from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {

// initializeFirebase() {
//   const firebase = require("firebase");

//   // Initialize Firebase
//   var config = {
//       apiKey: 'AIzaSyDpC3MY8oU6rveSP6DNVyWAfYLPRJIuajU',
//       authDomain: 'authenticationfirenative.firebaseapp.com',
//       databaseURL: 'https://authenticationfirenative.firebaseio.com',
//       projectId: 'authenticationfirenative',
//       storageBucket: 'authenticationfirenative.appspot.com',
//       messagingSenderId: '572832231141'
//   };
//   firebase.initializeApp(config);

//   //inicializando o firestore
//   const firestore = require("firebase/firestore");
//   db = firebase.firestore();
//   db.settings({ timestampsInSnapshots: true });
// }

// componentWillMount() {
//   this.initializeFirebase();
// }
  
  // componentWillMount() {
  //   // firebase.initializeApp({
  //   //   apiKey: 'AIzaSyDpC3MY8oU6rveSP6DNVyWAfYLPRJIuajU',
  //   //   authDomain: 'authenticationfirenative.firebaseapp.com',
  //   //   databaseURL: 'https://authenticationfirenative.firebaseio.com',
  //   //   projectId: 'authenticationfirenative',
  //   //   storageBucket: 'authenticationfirenative.appspot.com',
  //   //   messagingSenderId: '572832231141'
  //   // });
  //   }

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