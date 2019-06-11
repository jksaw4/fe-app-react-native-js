import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Dimensions } from 'react-native';
import { Tile, Card, Button, Header } from 'react-native-elements';
import Tiles from "react-native-tiles";
 
const { width } = Dimensions.get("window");

export default class ReactNativeTiles extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(["row 1", "row 2","row 1", "row 2"])
    };
  }
  render() {
    const { page } = this.props;

    return (
        <Tiles
          dataSource={this.state.dataSource}
          tilesPerRow={1}
          renderItem={(text, size) => (
            <Tile
            contentContainerStyle={{height:size, backgroundColor: '#abd6d1'}}
            title={text}>

      <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', color: '#000' }}
            >
        <Text>{text}</Text>

          </View>
            </Tile>
          )}
        />
    );
  }
}

const Til = ({text}) => {
  return (
    <View style={{margin:0,backgroundColor:'red'}}>
      <Text>{text}</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  item: {
    height: 60,
    backgroundColor:'red',
    borderRadius: 3,
    padding: 9,
    marginRight: 10
    
  }
});