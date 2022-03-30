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

import Styles from '../../Styles/main';

import colours from '../../Styles/colours';

export default function LoadScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Text style={Styles.paragraph}>Question 5</Text>
            <Image
                source={require('../../Images/bridge_wide.png')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>As you release the energy built up you creat a sort of rift, its messy but it seems to transport you, the master offers you a place to learn and improe your skills.</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
                <TouchableOpacity
                    style={Styles.questionButton}
                >
                    <Text style={Styles.questionButtonText}>Warrior</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.questionButton}
                >
                    <Text style={Styles.questionButtonText}>Mage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

