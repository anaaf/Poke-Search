import React from 'react';
import { Component } from 'react'
import { Text, View, Image, ScrollView, Platform, ImageBackground } from 'react-native'
import { Button, Icon, Header, Item, Input } from 'native-base'
import SearchBody from './SearchBody'
import PokeLoader from './PokeLoader'
import axios from 'axios'

export default class Search extends Component {
    state = {
        pokeSearch: "",
        onCall: true,
        data: ''
    }

    renderBody = () => {
        if(this.state.onCall) {
            return(
                <PokeLoader />
            )
        } else {
            <SearchBody data={this.state.data}/>
        }
    }

    searchPoke = () => {
        this.setState({onCall: true})
        const self = this
        axios.get("http://pokeapi/co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
        .then((respone) => {
            console.log(response.data)
            self.setState({date: respone.data})
            self.setState({onCall: false})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    searchBar={true}
                    rounded={true}
                >
                    <Item>
                        <Icon name="ios-search" onPress={this.searchPoke}></Icon>
                        <Input
                            value={this.state.pokeSearch}
                            placeholder='Search Pokemon'
                            onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
                        />
                    </Item>
                </Header>
                {this.renderBody()}
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : 0
    },

    titleTextStyle: {
        // color: 'blue',
        fontSize: 20
    }
}