import React from 'react'; 
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native' ; 

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>Themes</Text>
            </TouchableOpacity>

            <View style={styles.separator}></View>

            <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>React Native Basics</Text>
            </TouchableOpacity>

            <View style={styles.separator}></View>

            <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>React Native by Example</Text>
            </TouchableOpacity>
        </SafeAreaView>
    ); 
}; 

import colors from '../constants/colors'; 

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20, 
        paddingVertical: 16 
    }, 
    text : {
        fontSize: 16, 
        color: colors.text
    }, 

    separator : {

        backgroundColor: colors.border, 
        height: StyleSheet.hairlineWidth, 
        marginLeft: 20 
    }, 

    container : {
        paddingTop: 30
    }



}); 