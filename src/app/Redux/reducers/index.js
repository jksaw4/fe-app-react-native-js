import { combineReducers } from 'redux';
import routes from './routes';
import postReducer from './dbcon';


const rootReducer = combineReducers({
  routes,
  postReducer,
});

export default rootReducer;