import * as React from 'react';
import {StyleSheet} from 'react-native';

import colours from '../Styles/colours'

export default StyleSheet.create({
    gameHeader: {
        fontSize: 100,
        fontWeight: "100"
    },
    paragraph: {
        fontSize: 24,
        textAlign: 'center'
    },
    menuButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 300,
        height: 150,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: colours.blue,
    },
    menuButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    questionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 150,
        height: 75,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: colours.blue,
    },
    questionButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})