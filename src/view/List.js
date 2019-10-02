import React from 'react'
import {Text, View} from "react-native";
import {Button} from "react-native-elements";

export default class List extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Ini List</Text>
                <Button
                    onPress={() => navigate('Home')}
                    title="Go to Home Screen"
                />
            </View>
        )
    }
}