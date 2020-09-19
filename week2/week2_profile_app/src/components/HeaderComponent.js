import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, StatusBar, TouchableOpacity
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '../components'
// import { ava } from '../assets/ava.jpg'
export const HeaderComponent = (props) => {
    const {
        navigation
    } = props
    const onButtonClosePress = () => {
        navigation.goBack();
    };
    console.log(navigation.canGoBack())
    return (
        <SafeAreaView
            forceInset={{ top: "always" }}
        >
            <View style={styles.headerContainer}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                <View style={styles.headerWraper}>
                    <TouchableOpacity style={styles.buttonClose} {...navigation.canGoBack() && `onPress=${onButtonClosePress}`} >
                        <Icon AntDesign size={26} name="arrowleft" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonClose}>
                        <Icon MaterialCommunityIcons size={20} name="widgets" />
                    </TouchableOpacity>
                </View>
            </View>

           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "flex-end",
        // backgroundColor: "white",
    },
    buttonClose: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    headerWraper: {
        height: 35,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    }
});