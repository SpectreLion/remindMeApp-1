/**
 * RemindMe App
 * Categories  Component
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
  Dimensions
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';


const width = Dimensions.get('window').width;
export default class Categories extends Component<{}> {

  constructor(props){
    super(props);
  }

  render() {
    const { id,title,image } = this.props;
    return (
        <TouchableHighlight
            onPress={ ()=> {this.props.goToCategory(id)} }
            underlayColor={Colors.touchableHover}>
          <View style={styles.container}>
            <Image
              style={styles.icon}
              source={image}/>
            <Text style={ styles.categoryText }>{title}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:Colors.white,
    borderRadius:15,
    width:width/2-25,
    height:230,
    marginLeft:14,
    marginBottom:40
  },
  icon: {
    width:150,
    height:150,
    marginTop: 10,
    marginLeft:2
  },
  categoryText: {
    ...Typografy.avenirFont,
    color: Colors.categoriesText,
    fontSize: 20,
    textAlign:'center',
    marginTop:10
  }
});
