import React from 'react';
import {createAppContainer} from 'react-navigation'
import {TabBottomNavigation} from "./src/config/Router";
import {StyleSheet, View} from "react-native";

const TabBottomPage = createAppContainer(TabBottomNavigation);

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TabBottomPage/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff'
    }
});