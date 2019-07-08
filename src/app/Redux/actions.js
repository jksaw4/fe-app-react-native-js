export const NAVIGATE_TO = 'NAVIGATE_TO';
export const GO_BACK = 'GO_BACK';
export const SET_NAVIGATOR = 'SET_NAVIGATOR';
export const SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE';
export const ADD_POST = 'ADD_DATA';
export const FETCH_POST = 'FETCH_POST';

import DB from '../config/db';

var db1 = new DB();

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

export const createPost = (value) => {
  return (dispatch) => {
    return db
    .collection(collection)
    .insertOne({
      owner_id: "123",
      item: value
    }).then(dispatch(createPostSuccess(data)))
    .catch(error => {
      throw(error);
    });
  }
};

export const createPostSuccess =  () => {
  return {
    type: ADD_POST,
    payload: {
      owner_id: "123",
      item: "123"
    }
  }
};

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    return db
    .collection(collection)
    .find({}, { limit: 1000 })
    .asArray() 
    .then(todos => {
      this.setState({todos})
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  });
}
};