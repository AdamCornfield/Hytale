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
    navigation.navigate("Home")
    React.useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );
    
    return (
        <View style={{ flex: 1, backgroundColor: colours.dark }}>
            <Text style={Styles.paragraph}>End 2</Text>
            <Image
                source={require('../../Images/bridge_wide.png')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.paragraph}>You stand there powerless, you manage to get enough courage to run with your life.</Text>
            </View>
        </View>
    );
}

