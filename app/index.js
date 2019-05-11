// app/index.js

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';

import { library } from '@fortawesome/fontawesome-svg-core'
//import FontAwesome, { Icons } from 'react-native-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fas, fab)

export default class CodeSharing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'first'
    };
  }

  render() {
    const { page } = this.state;
    return (
      <View style={styles.container}>
        <Tabs
          selected={page}
          style={styles.tabbar}
          selectedStyle={{color:'gray'}} onSelect={el=>this.setState({page:el.props.name})}
        >
            <FontAwesomeIcon name="first" icon={['fas', 'home']} />
            <FontAwesomeIcon name="second" icon={['fas', 'route']} />
            <FontAwesomeIcon name="third" icon={['fas', 'user']} />
        </Tabs>

        <Text>CodeSharing App</Text>
        <Text>{page}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
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