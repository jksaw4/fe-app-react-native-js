import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList} from "react-native";
//import { Center } from "@builderx/utils";
import MaterialButtonShare from "../symbols/MaterialButtonShare.js";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as ReduxActions from '../Redux/actions';
import { navigateTo } from '../Redux/actions';


//var db1 = new DB();

class ListJourney extends Component {
    constructor(props) {
    super(props);
    this.state = { };
    this.displayData = this.displayData.bind(this);
   // db1.componentDidMount()
    this.displayData(); 
   }

displayData(){

  this.props.fetchAllPosts();
//console.log("fetchAllPosts",this.props.fetchAllPosts())
}




  render() {
    //console.log("this.props.listTodos",this.props.listTodos)
    const data = [];
    data.push(this.props.listTodos);
    
    
    return (
     
      <View style={styles.root}>
          <Text style={styles.text2}>Awesome!</Text>
          <Text style={styles.text3}>FIRST STEPP</Text>
        <View style={[styles.root, this.props.style]}>
        <View style={styles.bodyContent}>
        
        <TouchableOpacity onPress = {() => { navigateTo('Booking1'); }}>
          <Text style={styles.titleStyle}>{data.map(todo => {return (todo.title)})}</Text>
          <Text style={styles.subtitleStyle}>{data.map(todo => {return (todo.provider)})}</Text>
          <Text style={styles.textc}>{data.map(todo => {return (todo.vertices)})}-Days Morning Routine</Text>
          <Text style={styles.textc2}>Text Added</Text>
        </TouchableOpacity>
          </View>
        
        
        <MaterialButtonShare style={styles.materialButtonShare} />
        <Text style={styles.textc3}>ADD A JOURNEY</Text>
      </View>
      </View>
      
    );
  }

  
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(178,191,164,1)"
  },
  text2: {
    top:20,
    color: "#000",
   // paddingBottom: 12,
    fontSize: 30,
    //fontFamily: "roboto-regular",
    textAlign: "center"
  },
  text3: {
    top: 30,
    //width: 200.06,
    //height: 24.84,
    color: "#121212",
    //position: "absolute",
    //paddingBottom: 12,
    fontSize: 20,
    textAlign: "center"
  },
  materialCardWithoutImage: {
    top: 169.36,
    left: 0,
    width: 375,
    height: 307.29,
    position: "absolute",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(178,191,164,1)"
  },
  root: {
    flex: 1,
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    top:100,
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
    //fontFamily: "roboto-regular",
    textAlign: "center"
  },
  subtitleStyle: {
    top:110,
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  textc: {
    top:120,
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  textc2: {
    top:125,
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  materialButtonShare: {
    top: 290,
    left: 170,
    width: 56,
    height: 56,
    position: "absolute"
  },
  textc3: {
    top:230,
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    textAlign: "center"
  }
});

const mapStateToProps = (state) =>{
  //console.log("STATE!!!!!",state);
 //console.log("listTodospostReducer",state.postReducer.todo)
  return {
    listTodos:state.postReducer.todo
  }
  //console.log("listTodospostReducer",this.props.listTodos)

};

function mapDispatchToProps(dispatch) {
  navigateTo: routeName => { dispatch(navigateTo(routeName))}
  return bindActionCreators(ReduxActions, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListJourney);
