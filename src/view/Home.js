import React from 'react'
import {Text, View} from "react-native";
import {Button} from "react-native-elements";

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is the Home Screen of the App</Text>
                <Button
                    onPress={() => navigate('List') }
                    title="Go to List Screen"
                />
            </View>
        )
    }
}