/**
 * RemindMe App
 * Tasks Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  ImageBackground,
  View,
  ScrollView,
  Modal,
} from 'react-native';

import TaskHeader from './../components/TaskHeader';
import AddTaskModal from './../modals/AddTaskModal';
import Task from './../components/Task';
import Colors from './../theme/colors';
import HomeTasks from './../staticData/homeTasks';
import FriendsTasks from './../staticData/friendsTasks';
import SchoolTasks from './../staticData/schoolTasks';
import WorkTasks from './../staticData/workTasks';

const screen = Dimensions.get('window');

const categories = {
  home: {data: HomeTasks, title: "HOGAR"},
  work: {data: WorkTasks, title: "TRABAJO"},
  school: {data: SchoolTasks, title: "ESCUELA"},
  friends:  {data: FriendsTasks, title: "AMIGOS"}
}
export default class TasksScreen extends Component<{}> {

  constructor(props){
    super(props);
    this.goToCategoriesScreen = this.goToCategoriesScreen.bind(this);
    this.state = {
      tasks: [],
      showAddTaskModal: false
    }
  }

  goToCategoriesScreen(){
    this.props.navigation.goBack();
  }

  componentWillMount(){
    //Get categories parameter
    //Set state based on curent category
    this.setState({ tasks: categories[this.props.navigation.state.params.category].data});
  }

  openAddTaskModal(){
    this.setState({showAddTaskModal: true});
  }

  closeAddTaskModal(){
    this.setState({showAddTaskModal: false});
  }

  calcultateToBeCompletedTasks(tasks){
    let toBeCompleted = 0;
    tasks.forEach( task => {
      if(!task.completed){
        toBeCompleted++;
      }
    });
    return toBeCompleted;
  }

  toggleTask(taskId){
    let tasks = [...this.state.tasks];
    let currentTask = tasks.find( task => task.id === taskId );
    currentTask.completed = !currentTask.completed;
    this.setState( tasks );
  }

  addTask(text){
    const newTask = { title: text, completed: false, id: this.state.tasks.length + 1 };
    this.setState({ tasks: [newTask, ...this.state.tasks] });
    this.closeAddTaskModal();
  }

  renderTasks(tasks){
    return tasks.map( task => {
      return (<Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                toggleTask={this.toggleTask.bind(this)}/>)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TaskHeader goBackCategories={this.goToCategoriesScreen}  title={categories[this.props.navigation.state.params.category].title} taksToBeCompleted={this.calcultateToBeCompletedTasks(this.state.tasks)}/>
        <ScrollView style={styles.tasksContainer}>
          {this.renderTasks(this.state.tasks)}
        </ScrollView>
        <TouchableHighlight
          style={ styles.addTaskButton }
          underlayColor={Colors.primaryColorDarker}
          onPress={ this.openAddTaskModal.bind(this) }>
          <Image
            style={styles.addTaskButtonIcon}
            source={require('./../images/icon-plus.png')}/>
        </TouchableHighlight>
        <Modal
          visible={this.state.showAddTaskModal}
          transparent={true}
          animationType={'slide'}
          onRequestClose={ this.closeAddTaskModal.bind(this) }>
          <AddTaskModal
            closeAddTaskModal={ this.closeAddTaskModal.bind(this) }
            addTask={ this.addTask.bind(this) }/>
        </Modal>
      </View>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  tasksContainer: {
    flex: 1,
    width: screen.width
  },
  addTaskButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 66,
    height: 66,
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 72,
    backgroundColor: Colors.primaryColor
  },
  addTaskButtonIcon: {
    width: 28,
    height: 28
  }
});
