import { COMPONENT_DID_MOUNT,DISPLAY_DATA } from "../actions/"



const initialState = {  payload: [],  isLoading: false,  error: {}};

export function loaddatareducer( state=initialState, action ) { 	 
    switch(action.type) {    
        case COMPONENT_DID_MOUNT:      
            return {        
                	...state,        
                    isLoading: true    
            };        
        case DISPLAY_DATA:      
            return {        
	                ...state,        
                    payload: action.payload,        
                    isLoading: false      
                   };        
    /*    case Type.FETCH_DATABASE_DATA_FAILURE:      
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

export default loaddatareducer;
