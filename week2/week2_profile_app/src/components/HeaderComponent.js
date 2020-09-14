import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, StatusBar, TouchableOpacity
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '../components'

export const HeaderComponent = (props) => {
    const {
        title = "Setting",
        menuType,
        navigation
    } = props
    const onButtonClosePress = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView style={styles.headerContainer}
            forceInset={{ top: "always" }}
        >
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
            <View style={styles.headerWraper}>
                <TouchableOpacity style={styles.buttonClose} onPress={onButtonClosePress}>
                    <Icon AntDesign size={26} name="arrowleft" color="blue" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonClose}>
                    <Icon AntDesign size={30} name="close" color="blue" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 45,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "flex-end",
        backgroundColor: "white"
    },
    buttonClose: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "flex-end",
    }
});