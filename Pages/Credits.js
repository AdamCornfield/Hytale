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
  ImageBackground,
  Linking,
} from 'react-native';

import Styles from '../Styles/main';

import colours from '../Styles/colours';



function homeBtn(navigation) {
    navigation.navigate("Home")
}

export default function CreditsScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colours.dark }}>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                <Text style={Styles.creditsHeader}>Credits</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 20, marginBottom: 80, paddingHorizontal: 10, flex: 2}}>
                <Text style={Styles.hyperLink} onPress={() => Linking.openURL('https://github.com/AdamCornfield')}>Game Created By Adam Cornfield</Text>
                <View style={Styles.vSpacer}></View>
                <Text style={Styles.hyperLink} onPress={() => Linking.openURL('https://reactnative.dev/')}>Built using React Native</Text>
                <View style={Styles.vSpacer}></View>
                <Text style={Styles.hyperLink} onPress={() => Linking.openURL('https://game-icons.net/')}>Question images from game-icons.net</Text>
                <View style={Styles.vSpacer}></View>
                <Text style={Styles.hyperLink} onPress={() => Linking.openURL('https://wallpaperaccess.com/medieval-tavern')}>Home screen and end screen backgrounds from wallpaperaccess.com</Text>
            </View>
            <View style={{ alignItems: 'center',}}>
                <TouchableOpacity 
                    style={Styles.menuButton} 
                    onPress={() => {homeBtn(navigation)}}
                >
                    <Text style={Styles.menuButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

