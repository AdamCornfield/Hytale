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
} from 'react-native';

import Styles from '../Styles/main';

import colours from '../Styles/colours';

function playBtn(navigation) {
    navigation.navigate("Play")
}

function exitBtn() {
    BackHandler.exitApp()
}

export default function HomeScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colours.dark }}>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                <Text style={Styles.gameHeader}>Hytale</Text>
            </View>
            <View style={{ flex: 3, alignItems: 'center',}}>
                <TouchableOpacity 
                    style={Styles.menuButton} 
                    onPress={() => {playBtn(navigation)}}
                >
                    <Text style={Styles.menuButtonText}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.menuButton}
                    onPress={exitBtn}
                >
                    <Text style={Styles.menuButtonText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

