import React from 'react';
import { Component } from 'react';
import { Text, View, Image, ScrollView, Platform, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'native-base';
import PokeLoader from './PokeLoader';
import { List, ListItems } from "native";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class SearchBody extends Component {
    render() {
        const pokemon = this.props.data
        if (!pokemon) {
            return(
                <View></View>
            )
        }
        return (
            <ImageBackground 
            style={styles.imageBackground}
            source={{uri: "http://pokemongolive.com/img/posts/raids_loading.png"}}
            >
                <ScrollView style={styles.container}>
                    <Text styles={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: pokemon.sprites.front_default }}
                        />
                    </View>
                    <View style={styles.info}>
                        <ListItems itemDivider>
                            <Text style={{ fontWeigth: 'bold' }}>Size</Text>
                        </ListItems>
                        <ListItems>
                            <Text>Weight - {pokemon.weight}kg</Text>
                        </ListItems>
                        <ListItems>
                            <Text>Height - {pokemon.height / 10}m</Text>
                        </ListItems>
                        <ListItems itemDivider>
                            <Text style={{ fontWeigth: 'bold' }}>Abilties</Text>
                        </ListItems>
                        <List
                            dataArray={pokemon.abilties}
                            renderRow={(item) => {
                                <ListItems>
                                    <Text>{item.ability.name}</Text>
                                </ListItems>
                            }}>
                        </List>
                    </View>
                </ScrollView>
            </ImageBackground>

        )
    }
}

const styles = {
    imageBackground: {
        height: height,
        width: width,
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
    color: 'blue',
    fontSize: 20
},
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageStyle: {
        width: 200,
        height: 200
    },
    info: {
        flex: 1,
        background: 'white'
    }
}