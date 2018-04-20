/**
 * RemindMe App
 * TasksScreen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  ImageBackground,
  View
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';

const screen = Dimensions.get('window');


export default class TaskHeader extends Component<{}> {

  constructor(props) {
    super(props);
  }

  getFormatedDate(){
    //TODO: Move this to a static data folder
    const days = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const currentTime = new Date(),
          month = months[currentTime.getMonth()],
          day = days[currentTime.getDay()],
          date = currentTime.getDate(),
          year = currentTime.getFullYear();

    return `${day} ${date} de ${month} de ${year}`.toUpperCase();
  }

  render() {
    const { taksToBeCompleted, title } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.containerBackground}
          source={require('./../../images/pattern.png')}>
          <TouchableHighlight
            style={ styles.btnBack}
            onPress={this.props.goBackCategories}>
            <Image
              style={styles.btnBackButtonIcon}
              source={require('./../../images/back-btn.png')}
            />
          </TouchableHighlight>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.textPendingTask}>{taksToBeCompleted} Pendientes</Text>
          <Text style={styles.dateText}>{this.getFormatedDate()}</Text>
        </ImageBackground>
      </View>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
  container: {
    width: screen.width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  containerBackground: {
    flex: 1,
    justifyContent: 'center',
    width: screen.width,
    height: 200,
    alignItems: 'center'
  },
  avatar:{
    width: 130,
    height: 130,
    borderRadius: 65
  },
  titleText:{
    ...Typografy.avenirFont,
    fontSize: 36,
    color: Colors.white,
    textAlign: 'center',
  },
  dateText:{
    ...Typografy.avenirFont,
    fontSize: 16,
    color: Colors.gray
  },
  textPendingTask:{
    ...Typografy.avenirFont,
    fontSize: 36,
    color:Colors.white,
    textAlign: 'center',
    letterSpacing: 0.6


  },
  btnBack:{
    alignSelf: 'flex-start',
    width: 20,
    height: 16,
    marginTop:20,
    marginLeft:20
  },
  btnBackButtonIcon: {
    width: 20,
    height: 16
  }
});
