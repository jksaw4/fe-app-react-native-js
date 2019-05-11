/**
 * @format
 

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/
// index.ios.js
// index.android.js

import React from 'react';
import { AppRegistry } from 'react-native';
import StppFeReactNative from './app/index';

AppRegistry.registerComponent('StppFeReactNative', () => StppFeReactNative);