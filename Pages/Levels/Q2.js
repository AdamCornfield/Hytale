import React, { useState  } from 'react';
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

var taps = 0
var time = 4
var intervalID

export default function LoadScreen({ route, navigation }) {
    const [myTime, setMyTime] = useState("5");
    const [myText, setMyText] = useState("0");

    function steptimer () {
        setMyTime(time)

        if (time > 0) {
            time--
        } else {
            clearInterval(intervalID)
            if (taps > 30) {
                navigation.navigate("Q5")
            } else {
                navigation.navigate("Q4")
            }
        }
    }

    function tapBtn () {
        if (taps == 0) {
            intervalID = setInterval(steptimer, 1000);
        }
        taps = taps + 1
        
        setMyText('' + taps)
    }

    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Text style={Styles.paragraph}>Question 2</Text>
            <Image
                source={require('../../Images/bridge_wide.png')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>You are introduced to the Great Master Mage of the guild, he asks you to demonstrate your abilities, charge your attack!</Text>
            </View>
            <View style={{paddingTop: 40, paddingBottom: 0}}>
                <Text style={Styles.text}>Time: {myTime}</Text>
                <Text style={Styles.text}>Taps: {myText}</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 0, flex: 3}}>
                <TouchableOpacity
                    style={Styles.questionButtonCircle}
                    onPress={() => {tapBtn(navigation)}}
                >
                    <Text style={Styles.questionButtonText}>Tap!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

