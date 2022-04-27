import * as React from 'react';
import {StyleSheet} from 'react-native';

import colours from '../Styles/colours'

export default StyleSheet.create({
    gameHeader: {
        fontSize: 100,
        fontWeight: "100",
        color: 'black'
    },
    creditsHeader: {
        fontSize: 75,
        fontWeight: "100",
        color: 'white'
    },
    paragraph: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
    hyperLink: {
        fontSize: 24,
        textAlign: 'center',
        color: colours.blue
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    menuButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 300,
        height: 100,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: colours.greyVeryDark,
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
    exitGameBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 300,
        height: 50,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: colours.greyVeryDark,
    },
    exitGameText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 2,
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
        backgroundColor: colours.orange,
    },
    questionButtonCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 150,
        height: 150,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: colours.orange,
    },
    questionButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        lineHeight: 50,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    image: {
        width: 250,
        height: 250,
    },
    endImage: {
        width: 400,
        height: 250,
    },
    vSpacer: {
        marginBottom: 10,
        marginTop: 10
    }
})