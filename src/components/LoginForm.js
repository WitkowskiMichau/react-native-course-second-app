import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '', password: ''};

  onButtonPress = () => {
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
          this.setState({error: 'Authentication Failed.'});
        });
      });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={false}
            label='Email'
            value={this.state.email}
            placeholder={'user@gmail.com'}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            label='Password'
            value={this.state.pasword}
            placeholder={'password123'}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            text={'Log in'}
          ></Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
