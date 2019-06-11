// app/index.js

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Tile, Button, Header, Divider } from 'react-native-elements';
import ReactNativeTiles from "../components/ReactNativeTiles"

const NativeTiles = () => {
  const {page} = 'Tiles'
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: `${page}`, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Tile
        imageSrc={require('../img/download.png')}
        title={page}
        //icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
        contentContainerStyle={{ height: 50, backgroundColor: '#abd6d1'}}
        style={{color: 'white'}}
        featured
        >
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', color: '#fff' }}
          >
          <Text>{page}</Text>

        </View>
      </Tile> 
      
      <Divider style={{ backgroundColor: '#000', height: 10 }} />
  {/* <Card
    title='HELLO WORLD'
    image={require('./img/download.png')}>
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      icon={{name: 'code'}}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title={page} />
  </Card> */}
        <ReactNativeTiles page={page}/>

      </View>)
    
  
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
    borderTopWidth: 2,
    zIndex: 2
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

export default NativeTiles;
