import React, { Component }  from 'react';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';
import RemoteMongoClient from 'mongodb-stitch-react-native-services-mongodb-remote';
import { connect } from 'react-redux';
import {
    ScrollView,
    Text,
    StyleSheet
  } from 'react-native';
  import { Button } from 'react-native';
//import "./App.css";


const Booking1 = ({ activeRoute }) => (
    <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.header1}>{activeRoute.name}</Text>
      <Text style={styles.text}>Welcome! Here you can book your next trip!!</Text>
    </ScrollView>
  );
    
    const client = Stitch.initializeDefaultAppClient('todotutorial-cnnqb')
    
    
    const db = client.getServiceClient(RemoteMongoClient.factory,'mongodb-atlas').db('todo');
  
    client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
      db.collection('item').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
    ).then(() =>
      db.collection('item').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
    ).then(docs => {
        console.log("Found docs", docs)
        console.log("[MongoDB Stitch] Connected to Stitch")
    }).catch(err => {
        console.error(err)
    });

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
  
  
  
