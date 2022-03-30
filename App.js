/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  BackHandler,
} from 'react-native';

//Styling
import Styles from './Styles/main';
import colours from './Styles/colours';

//Pages
import HomeScreen from './Pages/Home';
import PlayScreen from './Pages/Play';
import Q1 from './Pages/Levels/Q1';
import Q2 from './Pages/Levels/Q2';
import Q3 from './Pages/Levels/Q3';
import Q4 from './Pages/Levels/Q4';
import Q5 from './Pages/Levels/Q5';
/*import E1 from './Pages/Levels/E1';
import E2 from './Pages/Levels/E2';
import E3 from './Pages/Levels/E3';
import E4 from './Pages/Levels/E4';*/

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" initialParams={{ itemId: 42 }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Home",
          headerStyle: {
            backgroundColor: colours.darkVeryDark,
          },
          headerTintColor: colours.grey,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: false  
          
        }} />
        <Stack.Screen name="Play" component={PlayScreen} options={{
          title: "Play",
          headerStyle: {
            backgroundColor: colours.darkVeryDark,
          },
          headerTintColor: colours.grey,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: false  
          
        }} />
        <Stack.Screen name="Q1" component={Q1} options={{
          title: "Q1",
          headerStyle: {
            backgroundColor: colours.darkVeryDark,
          },
          headerTintColor: colours.grey,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: false  
          
        }} />
        <Stack.Screen name="Q2" component={Q2} options={{
          title: "Q2",
          headerStyle: {
            backgroundColor: colours.darkVeryDark,
          },
          headerTintColor: colours.grey,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: false  
          
        }} />
        <Stack.Screen name="Q3" component={Q3} options={{
          title: "Q3",
          headerStyle: {
            backgroundColor: colours.darkVeryDark,
          },
          headerTintColor: colours.grey,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: false  
          
        }} />
        <Stack.Screen name="Q4" component={Q4} options={{
          title: "Q4",
          headerStyle: {
            backgroundColor: colours.darkVeryDark,
          },
          headerTintColor: colours.grey,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: false  
          
        }} />
        <Stack.Screen name="Q5" component={Q5} options={{
          title: "Q5",
          headerStyle: {
            backgroundColor: colours.darkVeryDark,
          },
          headerTintColor: colours.grey,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShown: false  
          
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
