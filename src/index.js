/**
 * @format
 

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/
// index.ios.js
// index.android.js


//import App from './App';


import { AppRegistry } from 'react-native';
import StppFeReactNative from './app/index-web';

AppRegistry.registerComponent('StppFeReactNative', () => StppFeReactNative);
AppRegistry.runApplication('StppFeReactNative', { rootTag: document.getElementById('root') });