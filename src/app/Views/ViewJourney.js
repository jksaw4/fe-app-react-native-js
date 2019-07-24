import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as ReduxActions from '../Redux/actions';


var { height } = Dimensions.get('window');
 
var box_count = 4 ;
var box_height = height / box_count;


class ViewJourney extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.LoadData = this.LoadData.bind(this);
   // db1.componentDidMount()
    this.LoadData(); 
   }

LoadData(){

  this.props.fetchAllPosts();
//console.log("fetchAllPosts",this.props.fetchAllPosts())
}


  render() {
    var payemnts = [];
    for(var i =1; i<= 7;i++)
    {
      
      if((i % 2) == 0){
        payemnts.push(
          <View key = {i} style={[styles.react1]}>
          <View style={[styles.react1,styles.rect2]} />
          <Text style={styles.text1}>Text 1</Text>
          <Text style={styles.text5}>Text 2</Text>
          <Text style={styles.text3}>-Days Morning Routine</Text>
          <Text style={styles.text4}>Text Added</Text>
          </View>
        )
      }
      else{
        payemnts.push(
          <View key = {i} style={[styles.react1,]}>
          <View style={[styles.react1,styles.rect3]} />
          <Text style={styles.text1}>Text 1</Text>
          <Text style={styles.text5}>Text 2</Text>
          <Text style={styles.text3}>-Days Morning</Text>
          <Text style={styles.text4}>Text Added</Text>
          </View>
        )
      }    
      }
    

    return (
     <ScrollView>
      <View style={styles.root}>
        <View style={styles.rect} />
        <Icon type={"Ionicons"} name={"ios-clock"} style={styles.icon} />
        <Text style={styles.text}>Text Added</Text>
        <Text style={styles.text2}>
          You've achieved 1 stepp out of 5 total stepps.
        </Text>
        
        
        { payemnts }
        </View>
        </ScrollView>
    
    );
    
    
  }
}

const styles = StyleSheet.create({
  root: {
    //flex: 1,
    backgroundColor: "red",
    //flexDirection: "column"
  },
  rect: {
    top: 0,
    left: 0,
    width: '100%',
    height: 318.98,
    backgroundColor: "#f7faf3",
    //position: "absolute"
  },
  icon: {
    top: 20.65,
    left: 28.8,
    position: "absolute",
    color: "grey",
    fontSize: 40
  },
  text: {
    top: 20.65,
    left: 69.11,
    width: 118.39,
    height: 29.48,
    color: "rgba(74,144,226,1)",
    position: "absolute",
    fontSize: 17
  },
  text2: {
    top: 100.04,
    left: 46.33,
    width: 283.93,
    height: 68.35,
    color: "#121212",
    position: "absolute",
    fontSize: 26
  },
  react1:{
    height:box_height,
    flex:1,
    flexDirection: "column",
    position:'relative'
    //top:300.37

  },
  rect2: {
    //top: 300.37,
    left: 0,
    width: '100%',
    height:'40%',
    backgroundColor: "#f7faf3",
    //position: "relative"
  },
  rect3: {
    //top: 400.37,
    left: 0,
    width: '100%',
    height:'40%',
    backgroundColor: "white",
    //position: "relative"
  },
  text1: {
    top: 20.04,
    left: 95.33,
    width: 283.93,
    height: 68.35,
    color: "#121212",
    position: "absolute",
    //fontSize: 26
  },
  text5: {
    top:54.55,
    left: 98,
    width: 283.93,
    height: 68.35,
    color: "#121212",
    position: "absolute",
    //fontSize: 26
  },
  text3: {
    top:92,
    left: 95.33,
    width: 283.93,
    height: 68.35,
    color: "#121212",
    position: "absolute",
    //fontSize: 26
  },
  text4: {
    top:92,
    left: 320.33,
    width: 283.93,
    height: 68.35,
    color: "#121212",
    position: "absolute",
    //fontSize: 26
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
  //navigateTo: routeName => { dispatch(navigateTo(routeName))}
  return bindActionCreators(ReduxActions, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewJourney);
