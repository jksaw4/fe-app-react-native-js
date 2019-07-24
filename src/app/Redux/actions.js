export const NAVIGATE_TO = 'NAVIGATE_TO';
export const GO_BACK = 'GO_BACK';
export const SET_NAVIGATOR = 'SET_NAVIGATOR';
export const SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE';
export const ADD_POST = 'ADD_POST';
export const FETCH_POST = 'FETCH_POST';
import { items } from '../stitch';

import DB from '../config/db';
import axios from 'axios';

var db1 = new DB();
db1.componentDidMount();
var collection = "todo-item";
var data = [];                  

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

/*export const createPost = ({ item }) => {
  return (dispatch) => {
    return axios.post(`${apipostUrl}`,{item:item})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};*/


export const createPost =  item => {
  return (dispatch) => {
    const todo = { owner_id: "567",item};
  const result =  db.collection(collection).insertOne(todo);
  dispatch(createPostSuccess(todo));
  }
  //dispatch({ type: "ADD_POST", payload: { ...todo, _id: result.insertedId } });
};


export const createPostSuccess =  (todo) => {
  return{
    type: ADD_POST,
    payload:todo
  }
  //console.log(data.item)
};


export const fetchPosts = (todo) => {
  return {
    type: FETCH_POST,
    todo
  }
};

export function fetchAllPosts ()  {
  return (dispatch) => {
    //const todo = { owner_id: userID,item};
     const data = 
  //console.log("fetchAllPosts",db.collection(collection).find({}).asArray());
  items.collection(collection).find({},{limit: 1000 }).asArray().then(todos => {
   todos.forEach((doc)=>{
     //console.log("todo11!!!!!!!!", doc.general);
     //console.log("todo12!!!!!!!!",doc.)
      dispatch(fetchPosts(doc.general));
    
  //  data.push(todos);
    //console.log("data:!!!!!!!!!!!!!!", data);
   })

  });


 

//     const result =  db.collection(collection).find({field:'item'},{limit: 1000 }).toArray((err, data)=>{if (err) console.log(err); else {data.forEach((doc)=>{console.log(doc.item)})}});

  //  var dbtest = db.collection(collection);
    
    //console.log("dbtest:!!!!!!!!!!!!!!", dbtest);
    
  }
};