import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
  } from 'react-native';
import { Button } from 'react-native-elements';
import DB from '../config/db';
import {createPost,fetchAllPosts} from '../Redux/actions'

var db1 = new DB();
var collection = "todo-item";

class Booking1 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [],
      value: ""
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     db1.componentDidMount()
   
  }
  

  /*addTodo(event){
      event.preventDefault();
      const { value } = this.state;
      db
      .collection(collection)
      .insertOne({
      owner_id: "123",
      item: value
    })
    .then(this.displayTodos)
    .catch(console.error);
  }*/
  /*
  displayTodos() {
    // query the remote DB and update the component state
      db
      .collection(collection)
      .find({}, { limit: 1000 })
      .asArray()
      .then(todos => {
        this.setState({todos});
      });
      //dispatch({type: DISPLAY_DATA, todos});
  }*/


handleSubmit = event => {
   event.preventDefault();
   const { value } = this.state;
   this.props.onAddPost(value)
   .then(fetchAllPosts)
    .catch(console.error);
  };

handleChangeText(event) {
  this.setState({
      value: event});
}

render(){
  return(
  <ScrollView contentContainerStyle={styles.view}>
    <TextInput
                        onChangeText={this.handleChangeText}
                        placeholder={"Author"}
                        autoFocus={true}
                        style={[styles.title]}
                        defaultValue={this.state.value}
                    />
                    <Button title = 'Add to db' onPress = {this.handleSubmit}/>
                    {this.state.todos.map(todo => {
                      return <Text>{todo.item}</Text>;
                      })}
  </ScrollView>
  );
}
  
}
const styles = StyleSheet.create({
    view: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
      padding: 20,
    },
    header1: {
      fontSize: 24,
      marginBottom: '20%',
    },
    text: {
      fontSize: 20,
      width: '70%',
      textAlign: 'center',
      lineHeight: 30,
      marginBottom: '20%',
    },
  });

  const mapDispatchToProps = dispatch => {
    return {
      onAddPost: () => {
        dispatch(createPost());
      }
    };
  };
  
  export default connect(
    mapDispatchToProps,
  )(Booking1);
  
  
  
