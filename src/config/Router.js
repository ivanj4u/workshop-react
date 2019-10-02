import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "../view/Home";
import List from "../view/List";
import News from "../view/News";
import Portofolio from "../view/Portofolio";

export const TabBottomNavigation = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions:{
                tabBarLabel:'Home',
                tabBarIcon: () => (
                    <Icon size={25} name={'home'}/>
                )
            },
        },
        News: {
            screen: News,
            navigationOptions:{
                tabBarLabel:'News',
                tabBarIcon: () => (
                    <Icon size={25} name={'newspaper-o'}/>
                )
            },
        },
        List: {
            screen: List,
            navigationOptions:{
                tabBarLabel:'List',
                tabBarIcon: () => (
                    <Icon size={25} name={'align-justify'}/>
                )
            },
        },
        Portofolio: {
            screen: Portofolio,
            navigationOptions:{
                tabBarLabel:'Portofolio',
                tabBarIcon: () => (
                    <Icon size={25} name={'user-o'}/>
                )
            },
        },


    },
    {
        tabBarOptions: {
            showIcon: true,
        },
    }
);
