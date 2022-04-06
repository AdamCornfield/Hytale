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
    React.useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );

    function RunBtn(navigation) {
        //Run
        navigation.navigate("E2")
    }

    function ImproveBtn(navigation) {
        //Improve
        navigation.navigate("E3")
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Text style={Styles.paragraph}>Question 4</Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={Styles.image}
                    source={require('../../Images/bg/Q4.png')}
                />
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>He is displeased by your performance, do you: Run away in shame or ask for advice to improve.</Text>
            </View>
            <View style={{alignItems: 'center', display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 20, flex: 3}}>
                <TouchableOpacity
                    style={Styles.questionButton}
                    onPress={() => {RunBtn(navigation)}}
                >
                    <Text style={Styles.questionButtonText}>Run Away</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.questionButton}
                    onPress={() => {ImproveBtn(navigation)}}
                >
                    <Text style={Styles.questionButtonText}>Improve</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

