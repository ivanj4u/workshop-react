import React, {Component} from 'react';
import {ScrollView, Text, View,} from 'react-native';
import {Button, ListItem} from "react-native-elements";

const axios = require('axios');

export default class App extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        axios.get('http://mhs.rey1024.com/apibudaya/getListCategory.php')
            .then(
                response => {
                    const data = response.data;

                    this.setState({data});

                    console.log(data);
                })
            .catch(console.error);
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Button
                        title="Daftar Budaya"
                    ></Button>
                </View>

                {
                    this.state.data.map((item, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={ {source: {uri: 'http://wadaya.rey1024.com/upload/kategori/' + item.gambar}} }
                            title={item.nama}
                            bottomDivider
                        />
                    ))
                }

            </ScrollView>
        )
    }
}

