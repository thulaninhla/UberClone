import React, {useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import Icon from 'react-native-vector-icons/FontAwesome';

//import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  
  //const myIcon = <Icon name="rocket" size={50} color="red" />;
  
  return (
    <>
    
    <StatusBar barStyle="dark-content" />
    <Text>I am a Map</Text>
    
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;


