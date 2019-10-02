import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.display}>
                <View style={styles.inline}>
                    <View>
                        <Text style={styles.navigationText}>
                            {"SAMPDORIA V INTERNAZIONALE"}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.titleText}>
                            {"Inter Milan Capai Rekor Start Terbaik Sejak Musim 1966/67"}
                        </Text>
                    </View>
                    <View>
                        <Image style={styles.imageShow} source={pic}/>
                    </View>
                    <View>
                        <Text numberOfLines={20}>
                            {"Conte bisa samai rekor Helenio Herrera andai Inter mengalahkan Juventus pada pekan depan."}
                            {'\n'}{'\n'}
                            {"Inter Milan sukses meraih start terbaik mereka sejak musim 1966/67. Nerazzuri memulai musim 2019/20 dengan koleksi poin sempurna hasil dari enam kemenangan beruntun di Serie A Italia."}
                            {'\n'}{'\n'}
                            {"Di bawah asuhan pelatih baru, Antonio Conte, Inter masing-masing berhasil mengalahkan: Lecce, Cagliari, Udinese, Milan, dan Lazio."}
                            {'\n'}{'\n'}
                            {"Terbaru, Inter menundukkan tuan rumah Sampdoria 3-1 pada giornata keenam Serie A di Stadion Luigi Ferraris, Sabtu (28/9)."}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

let pic = {
    uri: 'https://images.daznservices.com/di/library/GOAL/4c/89/sampdoria-inter_1rjz7yuyar1kg1svz0shr7pw9a.jpg?t=2092429261&quality=60&w=1600'
};

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f0f0',
    },
    inline: {
        backgroundColor: '#d4cdcb'
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
        width: 260,
        height: 180
    }
});