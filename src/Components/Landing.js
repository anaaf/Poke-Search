import React from 'react';
import { Component } from 'react'
import { Text, View, Image, ScrollView, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base';
// import { onSearch } from '../../App';

var bg = require('../../assets/icons/landing.jpg');

export default class Landing extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={bg} style={styles.imageStyle}>
                    <View style={styles.ViewStyle}>
                        <Text style={styles.titleTextStyle}>Welcome To The Pokemon Search</Text>
                        <Button 
                            block={true}
                            style={styles.buttonStyle}
                            onPress={() => this.props.switchScreen("search")}
                            >
                            <Text style={styles.buttonText}>Start Searching</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    container: {
      flex: 1,
      marginTop: Platform.OS === 'android' ? 40 : 0
    },
    imageStyle: {
      width: '100%', 
      height: '100%'
    },
    ViewStyle: {
      flex: 2,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonStyle: {
      margin: 10
    },
    buttonText: {
      color: 'white'
    },
    titleTextStyle: {
      color: 'blue',
      fontSize: 20
    }
  };