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

import RNRestart from 'react-native-restart';

import { Linking } from 'react-native'

import Styles from '../../Styles/main';

import colours from '../../Styles/colours';

export default function LoadScreen({ route, navigation }) {
    navigation.navigate("Home")
    React.useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );
    
    function HomeBtn(navigation) {
        //Warrior
        RNRestart.Restart();
    }
    
    function ShareBtn(text) {
        //Share
        Linking.openURL(`https://twitter.com/intent/tweet?url=${text}`)
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Text style={Styles.paragraph}>End 4</Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={Styles.image}
                    source={require('../../Images/bg/lost.png')}
                />
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>You are insulted by the suggestion, you try even harder to complete the spell but you manage to blow up the building. You are ejected from the guild.</Text>
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
                    onPress={() => {ShareBtn("I%20achieved%20ending%204%20on%20Hytale!")}}
                >
                    <Text style={Styles.questionButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

