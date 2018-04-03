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
import CategoriesList from './../components/CategoriesList';

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

  renderCategoriesIcons(categories){
          return categories.map( category => {
            return (<CategoriesList
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.image}/>)
            });
    }

  render() {
    return (
        <ImageBackground
          style={styles.container}
          source={require('./../../images/pattern.png')}>
          <Image
            style={styles.remindMeLogo}
            source={require('./../images/remindMe-logo.png')}/>
          <ScrollView >
            <View style={styles.categoriesContainer}>
              {this.renderCategoriesIcons(this.state.categories)}
            </View>
          </ScrollView>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
    marginRight:10,
    marginLeft:5
  },
});
