import React from 'react'; 
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native' ; 

// gain access to the icon library 
import {Entypo} from '@expo/vector-icons'; 

// import row item 
import { RowItem, RowSeparator } from '../components/RowItem'; 
import colors from '../constants/colors'; 


export default () => {
    return (
        <SafeAreaView style={styles.container}>

            <RowItem rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />} 
                     text='Themes' 
                     onPress={() => alert('todo!')}  />

            <RowSeparator /> 

            <RowItem rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
                     text='React Native Basics' 
                     onPress={() => alert('todo 2!')}  />


            <RowSeparator /> 

            <RowItem rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
                     text='React Native by Example' 
                     onPress={() => alert('todo! part 3')}  />

        </SafeAreaView>
    ); 
}; 

const styles = StyleSheet.create({

    container : {
        paddingTop: 30
    }

}); 