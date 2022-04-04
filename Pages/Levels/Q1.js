import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import Slider from '@react-native-community/slider';

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

function slideComplete(value, navigation) {
    if (value > 0.5) {
        //100%
        navigation.navigate("Q3")
    } else {
        //0%
        navigation.navigate("Q4")
    }
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
            <Text style={Styles.paragraph}>Question 1</Text>
            <Image
                source={require('../../Images/bridge_wide.png')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>You are introduced to the Master Warrior of the guild, he challenges you to a duel, how much power do you attack with?</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
            <Slider
                style={{width: 300, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#1890ff"
                maximumTrackTintColor="#FFFFFF"
                onSlidingComplete={(value) => {slideComplete(value, navigation)}}
            />
            </View>
        </View>
    );
}

