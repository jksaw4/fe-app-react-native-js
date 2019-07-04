import { COMPONENT_DID_MOUNT,ADD_DATA } from "../actions/"



const initialState = {  payload: [],  isLoading: false,  error: {}};

export function writedatareducer( state=initialState, action ) { 	 
    switch(action.type) {    
        case COMPONENT_DID_MOUNT:      
            return {        
                	...state,        
                    isLoading: true    
            };        
        case ADD_DATA:      
            return {        
	                ...state,        
                    payload: action.payload,        
                    isLoading: false      
                   };        
      /* case WRITE_DATABASE_DATA_FAILURE:      
            return {        
	                ...state,        
                    error: action.error,        
                    isLoading: false            
            };*/
            
                
        //case RESET_DATABASE_DATA_DATA:      
         //   return { ...state, ...initialState }        
		default:      return state;
    }
}

export default writedatareducer;
