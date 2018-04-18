/**
 * RemindMe App
 * home Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  View,
  StatusBar
} from 'react-native';
import Colors from './../theme/colors';

export default class HomeScreen extends Component<{}> {

  goToCategoriesScreen(){
    this.props.navigation.navigate('Categories');
  }

  render() {

    return (
      <ImageBackground
        style={styles.containerBack}
        source={require('./../../images/pattern.png')}>
        <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
       />
        <Image
          style={styles.remindMeLogo}
          source={require('./../images/remindMe-logo.png')}/>
        <TouchableHighlight
          style={styles.homeButton}
          underlayColor={Colors.touchableHover}
          onPress={this.goToCategoriesScreen.bind(this)}>
          <Text style={styles.homeButtonText}>COMENZAR</Text>
        </TouchableHighlight>
        <Image source={require('./../images/avatars.png')} />
      </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  containerBack: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remindMeLogo:{
    marginTop: 80
  },
  homeButton: {
      width: 325,
      height: 55,
      paddingTop: 15,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#ffffff'
  },
  homeButtonText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  }
});
