import React, {useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import SearchResults from './src/screens/SearchResults';

const App = () => {
    return (
    <>
    
    <StatusBar barStyle="dark-content" />
    
    <SearchResults />
    
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
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


