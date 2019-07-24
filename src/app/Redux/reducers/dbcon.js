import { ADD_POST,FETCH_POST} from '../actions';

let dataState = { todo: [], loading:true };


export const postReducer = (state = dataState, action) =>{
  switch (action.type) {
    case ADD_POST:
      return {...state, todo: {
          todo: action.payload,
          error: null,
          loading: false
        }
      };
   // case DELETE_POST:
    //  return state.filter(post => post._id !== action.payload.id);
      case FETCH_POST:
    //console.log("action.payload",action.todo);
      state = Object.assign({}, state, {todo:action.todo,loading: false});
    return state;
    default:
      return state;
  }
}

export default postReducer;


