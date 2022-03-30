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
            <Image
                source={require('../../Images/bridge_wide.png')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>You are introduced to the Master Warrior of the guild, he challenges you to a duel, how much power do you attack with?</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
                
            </View>
        </View>
    );
}

