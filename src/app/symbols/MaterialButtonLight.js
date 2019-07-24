import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text,View} from "react-native";

export default class MaterialButtonLight extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>I CAN!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    //fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
