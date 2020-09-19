import React, { Component, useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

export const Home2 = () =>  {
    return (
        <View style={styles.container}>
            <Text>Home2</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});