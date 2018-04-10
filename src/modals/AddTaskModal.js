/**
 * RemindMe App
 * Add Task Modal
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  View,
  TextInput,
  Platform,
} from 'react-native';

import Colors from './../theme/colors';

import DatePicker from 'react-native-datepicker';

import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')


const screen = Dimensions.get('window');
const currentDate = new Date();

let maximumDate = new Date();
maximumDate.setFullYear(maximumDate.getFullYear(), maximumDate.getMonth() + 60)


export default class AddTaskModal extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      taskText: '',
      date: currentDate
    }
  }

  addTask(){
    if(this.state.taskText !== ''){
      this.props.addTask(this.state.taskText);
    }else{
      //TODO: show an alert to the user!
    }
  }

  render() {

    return (
      <View style={styles.modalContainer}>
        <View style={styles.wrapperContainer}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.remindMeLogo}
              source={require('./../images/remindMe-logo.png')}/>
          </View>
          <View style={styles.bodyContainer}>
              <Text style={styles.addTaskText}>Agregar Tarea</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Nombre de la tarea"
                onChangeText={ (text) => this.setState({taskText: text}) }/>
              <DatePicker
                   style={datePickerStyles.lengthDatePicker}
                   date= {this.state.date}
                   mode="date"
                   format= "DD [de] MMMM [de] YYYY"
                   minDate={currentDate}
                   maxDate= {maximumDate}
                   showIcon = {false}
                   confirmBtnText="Confirmar"
                   cancelBtnText="Cancelar"
                   customStyles = {datePickerStyles}
                   onDateChange={(date) => {this.setState({date: date})}}
                />
              <TouchableHighlight
                style={styles.addButton}
                underlayColor={Colors.touchableHover}
                onPress={ ()=> { this.addTask() } }>
                <Text style={styles.addButtonText}>AGREGAR</Text>
              </TouchableHighlight>
              { Platform.OS === 'ios' &&
                <TouchableHighlight
                  style={styles.cancelButton}
                  underlayColor={Colors.touchableHover}
                  onPress={ ()=>{ this.props.closeAddTaskModal() } }>
                  <Text style={styles.cancelButtonText}>CANCELAR</Text>
                </TouchableHighlight>
              }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  wrapperContainer: {
    backgroundColor: 'white',
    height: 567
  },
  headerContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColorDarker
  },
  remindMeLogo:{
    width: 285,
  },
  bodyContainer: {
    flex: 1,
    height: 315,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  },
  addTaskText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    textAlign: 'center'
  },
  inputText:{
    width: 300,
    fontFamily: 'Avenir',
    fontSize: 30,
    textAlign: 'center',
    borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
    borderBottomColor: Colors.separator
  },
  addButton: {
      width: 325,
      height: 55,
      paddingTop: 15,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      backgroundColor: Colors.primaryColorDarker,
      borderColor: Colors.primaryColorDarker
  },
  addButtonText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  },
  cancelButton: {
      width: 325,
      height: 55,
      paddingTop: 15,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      backgroundColor: 'white',
      borderColor: Colors.primaryColorDarker
  },
  cancelButtonText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 17,
    color: Colors.primaryColorDarker
  }

});

const datePickerStyles = {
  lengthDatePicker:{
    width:326
  },
dateInput: {
   borderLeftWidth: 0,
   borderRightWidth: 0,
   borderTopWidth: 0,
   borderColor: Colors.primaryTxtOpacity

 },
 dateText: {
   fontFamily:'Avenir-Book',
   fontSize:20,
   textAlign:'center',
   lineHeight:30,
   color: Colors.primaryText

 }
};
