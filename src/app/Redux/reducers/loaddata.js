import * as Type from '../actions';

const initialState = {  payload: [],  isLoading: false,  error: {}};

export function loaddatareducer( state=initialState, action ) { 	 
    switch(action.type) {    
        case Type.FETCH_DATABASE_DATA:      
            return {        
                	...state,        
                    isLoading: true    
            };        
        case Type.FETCH_DATABASE_DATA_SUCCESS:      
            return {        
	                ...state,        
                    payload: action.payload,        
                    isLoading: false      
                   };        
        case Type.FETCH_DATABASE_DATA_FAILURE:      
            return {        
	                ...state,        
                    error: action.error,        
                    isLoading: false            
            };
            
                
        //case RESET_DATABASE_DATA_DATA:      
         //   return { ...state, ...initialState }        
		default:      return state;
    }
}

export default loaddatareducer;
