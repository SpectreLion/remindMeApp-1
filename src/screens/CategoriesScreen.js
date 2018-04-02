/**
 * RemindMe App
 * Categories Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  View,
  ScrollView
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';
import GridLayout from 'react-native-layout-grid';

export default class CategoriesScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      categories:[{id:1,title:'TRABAJO',image:require('./../../images/category-work.png')},
                  {id:2,title:'ESCUELA',image:require('./../../images/category-school.png')},
                  {id:3,title:'HOGAR',image:require('./../../images/category-home.png')},
                  {id:4,title:'AMIGOS',image:require('./../../images/category-friends.png')}]
      }
    }

  renderGridItem= (item) =>(
      <TouchableHighlight
          underlayColor={Colors.touchableHover}>
        <View style={styles.containerGrid}>
          <Image
              style={styles.icon}
              source={item.image}/>
          <Text style={ styles.categoryText }>{item.title}</Text>
        </View>
      </TouchableHighlight>
  );

  /*goToTaskScreen(){
    this.props.navigation.navigate('Tasks');
  }*/

  render() {
    const items = [...this.state.categories];
    return (
        <ImageBackground
          style={styles.container}
          source={require('./../../images/pattern.png')}>
          <Image
            style={styles.remindMeLogo}
            source={require('./../images/remindMe-logo.png')}/>
          <ScrollView style={styles.categoriesContainer}>
            <GridLayout
              items={items}
              itemsPerRow={2}
              renderItem={this.renderGridItem}/>
          </ScrollView>
        </ImageBackground>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    resizeMode: 'cover'
  },
  remindMeLogo:{
    marginLeft:35,
    marginTop: 35,
    width: 285,
    height: 75
  },
  categoriesContainer: {
    flex:1,
    marginTop:20
  },
  containerGrid: {
    flex: 1,
    flexDirection: 'column',
    alligItems: 'center',
    backgroundColor:Colors.white,
    borderRadius:15,
    width:180,
    height:230,
    marginLeft:1,
    marginTop:20
  },
  icon: {
    width:159,
    height:159,
    marginTop: 15,
    marginLeft:6
  },
  categoryText: {
    ...Typografy.avenirFont,
    color: Colors.categoriesText,
    fontSize: 20,
    textAlign:'center',
    marginTop:10
  }
});
