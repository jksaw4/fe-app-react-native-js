import { Component }  from 'react';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

export default class DB extends Component {
  constructor() {
      var db;
    super();
    this.state = { 
   
    };
    
  }

componentDidMount() {
        const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
        
        this.client = Stitch.initializeDefaultAppClient('todotutorial-cnnqb').then(client => {
          const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
          client.auth.loginWithCredential(new AnonymousCredential()).then(() => {
            console.log("[MongoDB Stitch] Connected to Stitch")
          }).catch(err => {
            console.error(err)
          });
          db = dbClient.db("todo");
        });
    }
}

/*
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');


Stitch.initializeDefaultAppClient('stepp-app-beta-app-be-stitch-niyfx').then(client => {
  const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");

  client.auth.loginWithCredential(new AnonymousCredential()).then(() => {
      console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
      console.error(err)
  });
});*/
