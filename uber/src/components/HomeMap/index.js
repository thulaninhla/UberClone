import React from "react";
import { View, Text } from "react-native";

const HomeScreen = (props) => {
    return (
        <View style={{ 
            height: 300, 
            backgroundColor:"#a0abff",
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Text>A Component</Text>
        </View>
    );
};

export default HomeScreen;