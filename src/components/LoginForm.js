import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = {email: '', password: ''};

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
        <CardSection>
          <Button text={'Log in'}></Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
