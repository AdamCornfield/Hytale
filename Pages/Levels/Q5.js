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

import {
    accelerometer,
    gyroscope,
    setUpdateIntervalForType,
    SensorTypes
} from "react-native-sensors";

import { map, filter } from "rxjs/operators";

import Styles from '../../Styles/main';

import colours from '../../Styles/colours';

var highestValue = 0
var time5 = 4
var intervalID5

export default function LoadScreen({ route, navigation }) {
    const [myTime, setMyTime] = useState("5");
    const [myText, setMyText] = useState("0");

    function stopTimer5 () {
        clearInterval(intervalID5)
    }

    const subscription = accelerometer
    .pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 30))
    .subscribe(
        speed => {
            //console.log(`You moved your phone with ${speed}`)
            if (speed > highestValue) {
                highestValue = speed
                
                if (highestValue != 0 && !intervalID5) {
                    intervalID5 = setInterval(steptimer5, 1000);
                }
            
                setMyText('' + Math.trunc(highestValue))
            }
        },
        error => {
            console.log("The sensor is not available");
        }
    );

    function steptimer5 () {
        setMyTime(time5)

        if (time5 > 0) {
            time5--
        } else {
            stopTimer5()
            if (highestValue > 40 && highestValue < 70) {
                navigation.navigate("E3")
            } else if (highestValue > 50) {
                navigation.navigate("E4")
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

    function resetValue () {
        highestValue = 0
        time5 = 4
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Text style={Styles.paragraph}>Question 5</Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={Styles.image}
                    source={require('../../Images/bg/Q5.png')}
                />
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>As you release the energy built up you creat a sort of rift, its messy but it seems to transport you, the master offers you a place to learn and improe your skills.</Text>
            </View>
            <View style={{paddingTop: 40, paddingBottom: 0}}>
                <Text style={Styles.text}>Time: {myTime}</Text>
                <Text style={Styles.text}>Highest Acceleration: {myText}</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
                <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
                    <Text style={Styles.paragraph}>Throw your phone away</Text>
                </View>
            </View>
        </View>
    );
}

