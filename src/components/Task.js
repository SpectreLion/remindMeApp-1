/**
 * RemindMe App
 * Task Component
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  View
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';
import Helper from './../items/DateFormat';

const screen = Dimensions.get('window');

export default class Task extends Component<{}> {

  constructor(props){
    super(props);
  }



  render() {

    const { id, title} = this.props;
    let { completed } = this.props;
    let {date} = this.props;
    let helper = new Helper();
    let help = new Helper();


    return (
        <TouchableHighlight
            style={styles.touchableArea}
            underlayColor={Colors.touchableHover}
            onPress={ () => { this.props.toggleTask(id) } }>
          <View style={styles.container}>
            <View style={completed ? styles.lineCompleted : styles.dateContainer}>
              <Text style={completed ? styles.taskCompletedText : styles.dayText}>{help.formatDay(date)}</Text>
              <Text style={completed ? styles.taskCompletedDate : styles.monthText}>{helper.formatMonth(date)}</Text>
            </View>
            <View style={styles.taskForm}>
              <Text style={ completed ? styles.taskCompletedText : styles.taskText }>{title}</Text>
            </View>
          </View>
        </TouchableHighlight>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
touchableArea:{
  height: 65,
  borderRadius: 10,
  marginBottom: 5,
  marginLeft: 13,
  marginRight: 12

},
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 65,
    padding: 5,
    shadowOffset:{  width: 2,  height: 5,  },
    shadowColor: Colors.shadow,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray
  },
  taskText: {
    ...Typografy.avenirFont,
    color: Colors.primaryText,
    fontSize: 21,
  },
  dayText: {
    ...Typografy.avenirFont,
    color: Colors.primaryColorDarker,
    fontSize: 21

  },
  monthText: {
    ...Typografy.avenirFont,
    color: Colors.primaryColorDarker,
    fontSize: 14

  },
  dateContainer: {
    width: 50,
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightHeight: 41,
    borderRightColor: Colors.primaryColorDarker

  },
  taskCompletedText: {
    ...Typografy.avenirFont,
    fontSize: 21,
    color: Colors.gray
  },
  taskCompletedDate: {
    ...Typografy.avenirFont,
    fontSize: 14,
    color: Colors.gray
  },
  taskForm: {
    width: 300,
    marginLeft: 5

  },
  lineCompleted :{
    borderRightColor: Colors.gray,
    borderRightWidth: 2,
    borderRightHeight: 41,
    alignItems: 'center',
    width: 50,
  }

});
