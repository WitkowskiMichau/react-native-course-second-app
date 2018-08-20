import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.testStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    testStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        padding: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgrounDColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
