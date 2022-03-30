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

import Styles from '../Styles/main';

import colours from '../Styles/colours';

function Q1Btn(navigation) {
    //Warrior
    navigation.navigate("Q1")
}

function Q2Btn(navigation) {
    //Mage
    navigation.navigate("Q2")
}

export default function LoadScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Image
                source={require('../Images/bridge_wide.png')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>You arrive at the adventurer's guild, the receptionist asks you what your speciality is:</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
                <TouchableOpacity
                    style={Styles.questionButton}
                    onPress={() => {Q1Btn(navigation)}}
                >
                    <Text style={Styles.questionButtonText}>Warrior</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.questionButton}
                    onPress={() => {Q2Btn(navigation)}}
                >
                    <Text style={Styles.questionButtonText}>Mage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

