export const NAVIGATE_TO = 'NAVIGATE_TO';
export const GO_BACK = 'GO_BACK';
export const SET_NAVIGATOR = 'SET_NAVIGATOR';
export const SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE';
export const ADD_POST = 'ADD_POST';
export const FETCH_POST = 'FETCH_POST';

import DB from '../config/db';
import axios from 'axios';

var db1 = new DB();

const apigetUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todotutorial-cnnqb/service/getdata/incoming_webhook/webhook0';
const apipostUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todotutorial-cnnqb/service/postdata/incoming_webhook/webhook1';
                    

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

export const createPost = ({ item }) => {
  return (dispatch) => {
    return axios.post(`${apipostUrl}`,{item})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      owner_id: "123",
      item: data.item
    }
  }
  //console.log(data.item)
};


export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(apigetUrl)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};