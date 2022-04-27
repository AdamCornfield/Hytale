import * as React from 'react';
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

import { Linking } from 'react-native'

import RNRestart from 'react-native-restart';

import Styles from '../../Styles/main';

import colours from '../../Styles/colours';
    
function HomeBtn(navigation) {
    //Warrior
    RNRestart.Restart();
}
    
function ShareBtn(text) {
    //Share
    Linking.openURL(`https://twitter.com/intent/tweet?url=${text}`)
}

export default function LoadScreen({ route, navigation }) {
    React.useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );
    
    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Text style={Styles.paragraph}>End 1</Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={Styles.endImage}
                    source={require('../../Images/bg/E1.jpg')}
                />
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>You break free from your fear and utilise your skill to kill the dragon, the Master is impressed.</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
                <TouchableOpacity
                    style={Styles.questionButton}
                    onPress={() => {HomeBtn(navigation)}}
                >
                    <Text style={Styles.questionButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.questionButton}
                    onPress={() => {ShareBtn("I%20achieved%20ending%201%20on%20Hytale!")}}
                >
                    <Text style={Styles.questionButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

