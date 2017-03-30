import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
          <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
      alignSelf: 'center',
      color: '#007AFF',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#eee',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007AFF',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
