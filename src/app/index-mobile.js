// app/index.js

import React, { Component } from 'react';
import { View, Text, StyleSheet,
  Dimensions,
  Platform,
  //DrawerLayoutAndroid,
  StatusBar,} from 'react-native';
// https://github.com/facebook/react-native/issues/3031
var DrawerLayoutAndroid = require('DrawerLayoutAndroid');
import { Card, Tile, Button, Header, Divider } from 'react-native-elements';
import NavTabs from './Navigation/NavTabs';
import ReactNativeTiles from "./components/ReactNativeTiles"

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
//import FontAwesome, { Icons } from 'react-native-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Booking1 from '../app/Views/Booking1';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/reducers';
import { setNavigator, setActiveRoute } from "./Redux/actions";
import DrawerContent from './Navigation/DrawerContent';
import Toolbar from './Navigation/Toolbar';
import AppNavigation from './Navigation/AppNavigation';

import { bgStatusBar, bgDrawer } from './global.styles';

let store = createStore(rootReducer, applyMiddleware(thunk));


const getDrawerWidth = () => 600 //Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64);


library.add(fas, fab)

export default class CodeSharing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'first'
    };
  
    this.drawer = React.createRef();
    this.navigator = React.createRef();
  }

  componentDidMount() {
    store.dispatch(setNavigator(this.navigator.current));
  }

  openDrawer = () => {
    this.drawer.current.openDrawer();
  };

  closeDrawer = () => {
    this.drawer.current.closeDrawer();
  };

  getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  };

  getMainView = () => {
    return (
      <View style={styles.container}>
        <StatusBar
            translucent
            backgroundColor={bgStatusBar}
            animated
        />
        <Toolbar showMenu={this.openDrawer} />
        <NavTabs/>
        <AppNavigation
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = this.getActiveRouteName(currentState);
            store.dispatch(setActiveRoute(currentScreen));
          }}
          ref={this.navigator}
        />
      </View>
    )
  }

  getMainViewAndroid = () => {
    return (
      <DrawerLayoutAndroid
        drawerWidth={getDrawerWidth()}
        //drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={
          () => <DrawerContent closeDrawer={this.closeDrawer} />
        }
        drawerBackgroundColor={bgDrawer}
        ref={this.drawer}
      > 
        {this.getMainView()}
      </DrawerLayoutAndroid>
    )
  }

  render() {
    const { page } = this.state;

    var mainView = Platform.OS === 'ios' ? this.getMainView : this.getMainViewAndroid
    return (
      <Provider store={store}>
        {mainView()}
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // iOS
    shadowOffset: {
        width: 0,            // These can't both be 0
        height: 1,           // i.e. the shadow has to be offset in some way
    },
    // Android
    shadowOffset: {
        width: 0,            // Same rules apply from above
        height: 1,           // Can't both be 0
    },
}
});