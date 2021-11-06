import React from "react";
import { View, Image, Text } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "./styles";

const UberTypeRow = (props) => {

    const {type} = props;

    return (
           <View style={styles.container}>

              {/* Img */}
              <Image style={styles.image} source={require('../../assets/images/UberX.jpeg')} />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>{type.type}{' '}
                <Ionicons name={'person'} size={16} />
                3
                </Text>
                <Text style={styles.time}>
                8:03 drop off
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#49be49'} />
                <Text style={styles.price}>
                    est. ${type.price}
                </Text>
            </View>

           </View>
    
    );
};

export default UberTypeRow;