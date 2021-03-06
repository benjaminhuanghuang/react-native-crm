import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
//
import Login from './Login';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD9d995DK8KNhxLzpV7YJVeZ6eV3oDnO5A",
      authDomain: "rn-crm.firebaseapp.com",
      databaseURL: "https://rn-crm.firebaseio.com",
      projectId: "rn-crm",
      storageBucket: "",
      messagingSenderId: "148634037220"

    });
  }

  render() {
    return ( 
      <View style = {styles.container} >
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});