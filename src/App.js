import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDJoZ_F-0SH5JPqXwluZsOq5dfl-k_mEWM',
            authDomain: 'reactnative-auth-df00c.firebaseapp.com',
            databaseURL: 'https://reactnative-auth-df00c.firebaseio.com',
            projectId: 'reactnative-auth-df00c',
            storageBucket: 'reactnative-auth-df00c.appspot.com',
            messagingSenderId: '954679390309'
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Auth"></Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;
