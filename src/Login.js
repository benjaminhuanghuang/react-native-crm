import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';

const LoginButton = MKButton.coloredButton()
            .withText('Login')
            .build();


export default class Login extends Component {
  state = {
    email:"",
    password:""
  }

  onButtonPress()
  {
    console.log('Button Clicked');
  }
  render() {
    const {form, fieldStyles, loginButtonArea, errorMessage } = styles;
    return ( 
      <View style = {styles.container} >
        <Text style = { styles.welcome} >
        Welcome to React Native!!!!
        </Text> 
        <MKTextField text = {this.state.email} 
          onTextChange={email=>{ this.setState({email})}}
          textInputStyle={fieldStyles}
          placeholder ={'Email...'}
          tintColor={MKColor.Teal}
        />
        <MKTextField text = {this.state.password} 
          onTextChange={password=>{ this.setState({password})}}
          textInputStyle={fieldStyles}
          placeholder ={'Password...'}
          tintColor={MKColor.Teal}
          password={true}
        />
        <Text style = { errorMessage }>
          {this.state.error}
        </Text> 
        <View style= {loginButtonArea}>
          <LoginButton onPress={this.onButtonPress.bind(this)}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    paddingBottom: 10,
    width: 200,
  },
  fieldStyles:{
    height:40,
    color: MKColor.Orange,
    width:200
  },
  longButtonArea:{
    marginTop: 20
  }
});