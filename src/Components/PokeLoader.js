import React from 'react';
import { Component } from 'react'
import { View, Image } from 'react-native';
import { Button } from 'native-base';

export default class PokeLoader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif" }}
                    style={styles.imageStyle}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
    },

    titleTextStyle: {
        color: 'blue',
        fontSize: 20
    },

    imageStyle: {
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    }
}