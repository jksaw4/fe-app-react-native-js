export const NAVIGATE_TO = 'NAVIGATE_TO';
export const GO_BACK = 'GO_BACK';
export const SET_NAVIGATOR = 'SET_NAVIGATOR';
export const SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE';
export const COMPONENT_DID_MOUNT = 'COMPONENT_DID_MOUNT';
export const ADD_DATA = 'ADD_DATA';
export const DISPLAY_DATA = 'DISPLAY_DATA';


import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';


export const navigateTo = routeName => ({
  type: NAVIGATE_TO,
  routeName,
});

export const goBack = () => ({
  type: GO_BACK,
});

export const setNavigator = navigator => ({
  type: SET_NAVIGATOR,
  navigator,
});

export const setActiveRoute = activeRouteName => ({
  type: SET_ACTIVE_ROUTE,
  activeRouteName,
});


export function componentDidMount() {
  return (dispatch) => {
    const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
    
    this.client = Stitch.initializeDefaultAppClient('todotutorial-cnnqb').then(client => {
      const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
      client.auth.loginWithCredential(new AnonymousCredential()).then(() => {
        console.log("[MongoDB Stitch] Connected to Stitch")
      }).catch(err => {
        console.error(err)
      });
      this.db = dbClient.db("todo");//this.displayTodosOnLoad();
    });
    dispatch({type: COMPONENT_DID_MOUNT});
  };
}

export function addTodo(event){
  return (dispatch) => {
          if (event !== null){
          //  event.preventDefault();
            const { value } = this.state;
            this.db
            .collection("todo-item")
            .insertOne({
              owner_id: "123",
              item: value
            })
            .then(this.displayTodos)
            .catch(console.error);
            dispatch({type: ADD_DATA, event:event});
          }
  };
}

export function displayTodos() {
  // query the remote DB and update the component state
  return (dispatch) => {
    this.db
    .collection("todo-item")
    .find({}, { limit: 1000 })
    .asArray()
    .then(todos => {
      this.setState({todos});
    });
    dispatch({type: DISPLAY_DATA, todos});
  };
}