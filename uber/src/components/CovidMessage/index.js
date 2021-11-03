import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Travel only if necessary</Text>

            <Text style={styles.text}>Make sure to for the covid regulations when traveling to stop the spread of covid 19! </Text>
            
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    );
};

export default CovidMessage;