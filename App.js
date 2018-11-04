import React, {Component} from 'react';
import { View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
// import { FirebaseAuth } from '@firebase/auth-types';


class App extends Component {
  state = { loggedIn : null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDpC3MY8oU6rveSP6DNVyWAfYLPRJIuajU',
      authDomain: 'authenticationfirenative.firebaseapp.com',
      databaseURL: 'https://authenticationfirenative.firebaseio.com',
      projectId: 'authenticationfirenative',
      storageBucket: 'authenticationfirenative.appspot.com',
      messagingSenderId: '572832231141'
    });
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }); 
   }

   renderContent() {
     switch (this.state.loggedIn) {
       case true: 
        return <Button>Log Out</Button>
       case false:
        return <LoginForm />;
       default: 
        return <Spinner size="large" />;
     }
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;