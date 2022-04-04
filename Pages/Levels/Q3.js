import RNShake from 'react-native-shake';
import * as React from 'react';
import { useState  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Pressable,
    TouchableOpacity,
    BackHandler,
    Image,
} from 'react-native';

import Styles from '../../Styles/main';

import colours from '../../Styles/colours';

var shakes = 0
var time = 4
var intervalID

export default function LoadScreen({ route, navigation }) {
    const [myTime, setMyTime] = useState("5");
    const [myText, setMyText] = useState("0");

    React.useEffect(() => {
        const subscription = RNShake.addListener(() => {
            if (shakes == 0) {
                intervalID = setInterval(steptimer, 1000);
            }
            shakes++
        
            setMyText('' + shakes)
        })
    }, [])

    function steptimer () {
        setMyTime(time)

        if (shakes >= 5) {
            clearInterval(intervalID)
            navigation.navigate("E1")
        } else {
            if (time > 0) {
                time--
            } else {
                clearInterval(intervalID)
                if (shakes >= 5) {
                    navigation.navigate("E1")
                } else {
                    navigation.navigate("E2")
                }
            }
        }
    }
    
    React.useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );

    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Text style={Styles.paragraph}>Question 3</Text>
            <Image
                source={require('../../Images/bridge_wide.png')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>As you unleash a powerful attack, you then feel the ground shake and a dragon appears, you are frozen in fear, shake your phone to break free.</Text>
            </View>
            <View style={{paddingTop: 40, paddingBottom: 0}}>
                <Text style={Styles.text}>Time: {myTime}</Text>
                <Text style={Styles.text}>Shakes: {myText}</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
                <Text style={Styles.paragraph}>Shake</Text>
            </View>
        </View>
    );
}

