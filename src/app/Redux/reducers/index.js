import { combineReducers } from 'redux';
import routes from './routes';
import dbcon from './dbcon';


const rootReducer = combineReducers({
  routes,
  dbcon,
});

export default rootReducer;