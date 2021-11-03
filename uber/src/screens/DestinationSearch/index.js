import React, { useState } from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import styles from "./styles.js";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = (props) => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);


    return (
        <SafeAreaView>
            <View style={styles.container}>
           
           <TextInput 
           value={destinationText}
           onChangeText={setDestinationText}
           style={styles.textInput}
           placeholder="Where From?" 
           />
        
        <GooglePlacesAutocomplete
         placeholder='Whare To?'
         onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
        query={{
        key: 'AIzaSyDr0Ko6CdWKnkwXbJ81r5fnEDLM4bV5JY0',
        language: 'en',
      }}
    />
    </View>
        </SafeAreaView>
        
    );
};

export default DestinationSearch;