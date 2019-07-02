import { combineReducers } from 'redux';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';
import loaddatareducer from './loaddata';
import writedatareducer from './writedata';



const dbcon = combineReducers({
    loaddatareducer,
    writedatareducer,
   // deldata: deldatareducer,
    //updatedata: updatedatareducer
});

const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');



Stitch.initializeDefaultAppClient('todotutorial-cnnqb').then(client => {
  const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");

  client.auth.loginWithCredential(new AnonymousCredential()).then(() => {
      console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
      console.error(err)
  });
});

export default dbcon;


