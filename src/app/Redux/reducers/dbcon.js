import { combineReducers } from 'redux';
import loaddatareducer from './loaddata';
import writedatareducer from './writedata';



const dbcon = combineReducers({
    loaddatareducer,
    writedatareducer,
   // deldata: deldatareducer,
    //updatedata: updatedatareducer
});

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

export default dbcon;


