import React from 'react';
import { Text, View, Image, ScrollView, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import Landing from './src/Components/Landing'
import Search from './src/Components/Search';
import PokeLoader from './src/Components/PokeLoader'

export default class App extends React.Component {
  state = {
    currentScreen: "landing"
  }

  renderScreen = () => {
    if (this.state.currentScreen === "landing") {
      return(
        <Landing switchScreen={this.switchScreen} />
      ) 
    }
    else if (this.state.currentScreen === "search") {
      return(
        <Search />
      ) 
    }
  }
  
  switchScreen = (currentScreen) => {
    this.setState({currentScreen})
  } 

  render() {
    return (
      <View style={styles.container}>
       {this.renderScreen()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 40 : 0
  }
}
 
