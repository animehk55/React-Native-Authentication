import React from 'react';
import {
        Text,
        View
        } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        // flex: 1,
        backgroundColor: '#f6f3f3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 20,
        width: '100%',
        // shadowColor: 'red',
        // shadowOffset: { width: 20, height: 2 },
        // shadowOpacity: 0.2
    },
    textStyle:{
        fontSize: 40,
        marginTop: 0
    }
};

export { Header };