import React, { Component }  from 'react';
//import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';
//import RemoteMongoClient from 'mongodb-stitch-react-native-services-mongodb-remote';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';
import { connect } from 'react-redux';
import {
    ScrollView,
    Text,
    StyleSheet,
    TextInput
  } from 'react-native';
  import { Button } from 'react-native';
  import  writedatareducer from '../Redux/reducers/writedata';
  //import SearchData from './SearchData';
//import "./App.css";



class Booking1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'London' };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.text}>Welcome! Here you can book your next trip!!</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
            title="Book your tickets here"
            style={styles.button}
            onPress= {() => writedatareducer()}
          />
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

  const mapStateToProps = state => ({
    activeRoute: state.routes.activeRoute,
  });
  
  export default connect(
    mapStateToProps,
  )(Booking1);
  
  
  
