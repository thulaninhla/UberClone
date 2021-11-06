import React from "react";
import { View, Text } from "react-native";
import UberTypeRow from "../UberTypeRow";

import typesData from '../../assets/data/types';
import types from "../../assets/data/types";

const UberTypes = (props) => {
    return (
        <View>
            {typesData.map((type) => (
            <UberTypeRow type={type} /> 
            ))}
           
        
        </View>
    );
};

export default UberTypes;