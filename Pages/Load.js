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

export default function LoadScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colours.dark }}>
            <View style={{ flex: 3, alignItems: 'center',}}>
                <Text>Load</Text>
            </View>
        </View>
    );
}

