import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity
} from "react-native";

export const ImageComponent = (props) => {
    const { img, index } = props
    const generateRandomInteger = (min, max) => {
        return min + Math.random() * (max - min)
    }
    const randomNumber = generateRandomInteger(0.65, 0.5)
    // console.log(randomNumber)
    return (
        <>
            <TouchableOpacity style={{ width: "50%", aspectRatio: randomNumber }}>
                <Image source={img.url}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        borderRadius: 20,
                        marginBottom: 10,
                        marginRight: 10
                    }}
                />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    containerImg: {
        flexDirection: 'row'
    }
});