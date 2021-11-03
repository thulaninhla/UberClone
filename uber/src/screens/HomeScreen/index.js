import React from "react";
import { View, Text } from "react-native";

//import Icon from 'react-native-vector-icons/FontAwesome';

import HomeMap from '../../components/HomeMap';
import CovidMessage from "../../components/CovidMessage";
import HomeSearch from "../../components/HomeSearch";

const HomeScreen = (props) => {
    return (
        <View>
        <HomeMap />  

        {/* Codiv message component */}
        <CovidMessage />

        {/* Bottom component */}
        <HomeSearch />

        </View>
    );
};

export default HomeScreen;