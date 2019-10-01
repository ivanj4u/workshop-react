import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {RectButton} from "react-native-gesture-handler";
import AppleStyleSwipeableRow from "./AppleStyleSwipeableRow";
import GmailStyleSwipeableRow from "./GmailStyleSwipeableRow";

const Row = ({ item }) => (
    <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
        <Text style={styles.fromText}>{item.from}</Text>
        <Text numberOfLines={2} style={styles.messageText}>
            {item.message}
        </Text>
        <Text style={styles.dateText}>
            {item.when} {'❭'}
        </Text>
    </RectButton>
);

const SwipeableRow = ({ item, index }) => {
    if (index % 2 === 0) {
        return (
            <AppleStyleSwipeableRow>
                <Row item={item} />
            </AppleStyleSwipeableRow>
        );
    } else {
        return (
            <GmailStyleSwipeableRow>
                <Row item={item} />
            </GmailStyleSwipeableRow>
        );
    }
};

export default SwipeableRow;

export const Separator = () => <View style={styles.separator}/>;

const ListItem = ({text, onSwipeFromLeft, onRightPress}) => (
    <Swipeable>
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </Swipeable>
);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    text: {
        color: '#4a4a4a',
        fontSize: 15,
    },
    separator: {
        flex: 1,
        height: 1,
        // backgroundColor: '#e4e4e4',
        marginLeft: 10,
        backgroundColor: 'rgb(200, 199, 204)',
        height: StyleSheet.hairlineWidth,
    },
    rectButton: {
        flex: 1,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    fromText: {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    messageText: {
        color: '#999',
        backgroundColor: 'transparent',
    },
    dateText: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 20,
        top: 10,
        color: '#999',
        fontWeight: 'bold',
    },
});