import React, { Component }  from 'react';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';
import { connect } from 'react-redux';
import {
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
  } from 'react-native';
  import { addTodo, displayTodos } from '../Redux/actions';
import { Button } from 'react-native-elements';




class Booking1 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      //data: (props.edit) ? props.data.data : "" 
      todos: [],
      value: ""
    };
    //this.adddata = this.adddata.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
   // this.displayTodos = this.displayTodos.bind(this);
    //this.addTodo = this.addTodo.bind(this);
    
  }

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
                    <Button title = 'Add to db' onPress = {addTodo}/>
        
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

  
  
  export default connect(
    addTodo,
  )(Booking1);

  //  export default connect(null, {addQuote, updateQuote})(NewQuote);
  
  
  
