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
import Categories from './../components/Categories';

export default class CategoriesScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      categories:[{id:'work',title:'TRABAJO',image:require('./../../images/category-work.png')},
                  {id:'school',title:'ESCUELA',image:require('./../../images/category-school.png')},
                  {id:'home',title:'HOGAR',image:require('./../../images/category-home.png')},
                  {id:'friends',title:'AMIGOS',image:require('./../../images/category-friends.png')}]
      }
    }
    goToTasks(category){
      this.props.navigation.navigate('Tasks', {category: category})
    }
  renderCategoriesIcons(categories){
          return categories.map( category => {
            return (<Categories
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    goToCategory={this.goToTasks.bind(this)}
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
    flex: 1
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
