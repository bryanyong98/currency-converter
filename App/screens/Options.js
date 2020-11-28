import React from 'react'; 
import { View, Alert, TouchableOpacity, StyleSheet, Text, SafeAreaView, ScrollView, Linking } from 'react-native' ; 

// gain access to the icon library 
import {Entypo} from '@expo/vector-icons'; 

// import row item 
import { RowItem, RowSeparator } from '../components/RowItem'; 
import colors from '../constants/colors'; 

const openURL = url => {

    Linking.openURL(url).catch(() => {
        Alert.alert('Sorry, something went wrong.', 'Please try again later.') ; 
    }); 
}


export default () => {
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                    <RowItem rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />} 
                            text='Themes' 
                            onPress={() => openURL("https://reactnative.dev/docs/tutorial")}  />

                    <RowSeparator /> 

                    <RowItem rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
                            text='React Native Basics' 
                            onPress={() => openURL("https://reactnative.dev/docs/tutorial")}  />


                    <RowSeparator /> 

                    <RowItem rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
                            text='React Native by Example' 
                            onPress={() => openURL("https://reactnativeexample.com/")}  />

                
            </ScrollView>



        </SafeAreaView>
    ); 
}; 

const styles = StyleSheet.create({

    container : {
        paddingTop: 30, 
        flex: 1
    }

}); 