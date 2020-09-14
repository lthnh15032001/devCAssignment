import React, { Component, useEffect, useState } from "react";
import { StatusBar } from 'react-native'
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { HeaderComponent } from "../components";
export const Home = () => {
    return (
        <React.Fragment>
            {/* <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle="light-content"
            /> */}
            <HeaderComponent />
            <View style={styles.container}>
                <Text>12345678222222</Text>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});