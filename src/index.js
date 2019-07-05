/**
 * @format
 

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/
// index.ios.js
// index.android.js

// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

//import App from './App';
import rootReducer from './app/Redux/reducers';
import { fetchAllPosts } from './app/Redux/actions';

//import registerServiceWorker from './registerServiceWorker';
import { AppRegistry } from 'react-native';
import StppFeReactNative from './app/index-web';

AppRegistry.registerComponent('StppFeReactNative', () => StppFeReactNative);
AppRegistry.runApplication('StppFeReactNative', { rootTag: document.getElementById('root') });


const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllPosts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

//registerServiceWorker();