import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.display}>
                <View style={styles.inline}>
                    <View>
                        <Text style={styles.titleText}>
                            {"Portofolio"}
                        </Text>
                    </View>
                    <View style={styles.inline}>
                        <Image style={styles.imageShow} source={pic}/>
                        <Text>
                            { "Nama : Ivan Jiteng Aribanilia Banon"}
                            {'\n'}{'\n'}
                            {"Pegawai - CPP Merauke - 2008"}
                            {'\n'}{'\n'}
                            {"Pengelola UPC - CPP Merauke - 2011"}
                            {'\n'}{'\n'}
                            {"Pengelola UPC - CPP Merauke - 2012"}
                            {'\n'}{'\n'}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

let pic = {
    uri: 'https://hcms.pegadaian.co.id/i/lk/1491205703_p83122.jpg'
};

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f0f0',
    },
    inline: {
        flex: 2,
        padding: 5,
    },

    navigationText: {
        fontSize: 10,
        fontStyle: 'italic'
    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    bodyText: {
        fontFamily: 'Cochin'
    },

    imageShow: {
        width: 100,
        height: 165,
    }
});
