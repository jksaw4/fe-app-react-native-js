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
import {createPost,fetchAllPosts} from '../Redux/actions';


var db1 = new DB();
var collection = "todo-item";
var onAddPost;

class Booking1 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [],
      value: ""
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   // this.addTodo = this.addTodo.bind(this);
    this.displayTodos = this.displayTodos.bind(this);
    db1.componentDidMount()
   
  }
  
/*
  addTodo(event){
      event.preventDefault();
      const { value } = this.state;
      db
      .collection(collection)
      .insertOne({
      owner_id: "123"this.client.auth.user.id,
      item: value
    })
    .then(this.displayTodos)
    .catch(console.error);
  }*/
  
  displayTodos() {
    // query the remote DB and update the component state
    console.log("5------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      this.props.FetchOnPost();
    console.log("6------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      todos => {
      this.setState({todos});
      };
    console.log("7------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")   
      //dispatch({type: DISPLAY_DATA, todos});
  }

  handleChangeText(event) {
    this.setState({
      item: event});
  }

  handleSubmit = event => {
    event.preventDefault();
    const { item } = this.state;
      this.props.onAddPost(item);
     this.displayTodos();
    //  this.props.fetchAllPosts();
  };


/*
handleSubmit = event => {
   event.preventDefault();
   const { value } = this.state;
   console.log("3------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
   this.props.onAddPost(value);
   console.log("4------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
   this.displayTodos();
   // .catch(console.error);
};*/




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
                   <Text>{this.displayTodos}</Text>
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

  /*const mapDispatchToProps = (dispatch) => {
    console.log("1------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")    
    return{
      onAddPost: (value) =>{
        console.log("2------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        dispatch(createPost(value));
    
      }
    }
  };*/

  const mapStateToProps = state =>{
    return{
      todos:state
    };
  };


  const mapDispatchToProps = dispatch => {
    return {
      onAddPost: post => {
        console.log("1------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        dispatch(createPost(post));
        console.log("2------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      },
      FetchOnPost: () => {
        console.log("3------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        dispatch(fetchAllPosts());
        console.log("4------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      }
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Booking1);
  
  
  
