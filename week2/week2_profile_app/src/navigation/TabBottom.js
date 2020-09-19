import React, { Component, useEffect, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MyTabBar } from '../components/MyTabBar';

const Tab = createBottomTabNavigator();
import { Home, Home2, Home3 } from '../screens'
export const TabBottom = (props) => {
    return (
        <Tab.Navigator initialRouteName="Home" tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home2" component={Home2} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Home3" component={Home3} />
        </Tab.Navigator>
    );
}
