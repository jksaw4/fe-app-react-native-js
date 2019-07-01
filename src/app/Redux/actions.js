export const NAVIGATE_TO = 'NAVIGATE_TO';
export const GO_BACK = 'GO_BACK';
export const SET_NAVIGATOR = 'SET_NAVIGATOR';
export const SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE';
import dbclient from './reducers/dbcon';


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

export function fetchdatabasedata(args) {  
  this.db = dbclient;
	return async (dispatch) => {    
        // Initiate loading state    
        dispatch({      
            type: FETCH_DATABASE_DATA    
        });
        try {      
            // Call the API      
            const collection = this.state.db.collection("item");
            const result = await fetchdatabasedata(// query the remote DB and update the component state
              this.db
              .collection("item")
              .find({}, { limit: 1000 })
              .asArray()
              .then(todos => {
              this.setState({todos});
              })
            );           
            // Update payload in reducer on success     
            dispatch({        
                type: FETCH_DATABASE_DATA_SUCCESS,        
                payload: result,        
                currentPage: args.pageCount      
            });    
        } catch (err) {     
            // Update error in reducer on failure           
            dispatch({        
                type: FETCH_DATABASE_DATA_FAILURE,        
                error: err      
            });    
        }  
    };
}

export function fetchdatabasestate(event) {  
  this.db = dbclient;
  //event.preventDefault();
  const { value } = this.state;
	return async (dispatch) => {    
        // Initiate loading state    
        dispatch({      
            type: FETCH_DATABASE_STATE    
        });
        try {      
            // Call the API      
           // const collection = this.state.db.collection("item");
            const result = await fetchdatabasestate(
              //event.preventDefault();
              //const { value } = this.state;
              // insert the todo into the remote Stitch DB
              // then re-query the DB and display the new todos
              this.db
                .collection("item")
                .insertOne({
                  owner_id: this.client.auth.user.id,
                  item: value
                })
                .then(this.fetchdatabasedata) 
            );
                 
                  
            // Update payload in reducer on success     
            dispatch({        
                type: WRITE_DATABASE_DATA_SUCCESS,        
                payload: result,        
                currentPage: args.pageCount      
            });    
        } catch (err) {     
            // Update error in reducer on failure           
            dispatch({        
                type: WRITE_DATABASE_DATA_FAILURE,        
                error: err      
            });    
        }  
        //handleChange(event) { 
         // this.setState({ value: event.target.value });
        //}
    };
}