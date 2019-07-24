import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonLight from "../symbols/MaterialButtonLight.js";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>
          The first step is you have to say you can!
        </Text>
        <Text style={styles.text2}>STEPP</Text>
        <MaterialButtonLight style={styles.materialButtonLight} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(7,179,145,1)",
    borderColor: "#000000",
    borderWidth: 1,
    borderStyle: "dashed"
  },
  text: {
    top: 321.05,
    left: 75.94,
    width: 208.5,
    height: 143.25,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 32,
    fontWeight: "normal",
    textAlign: "left"
  },
  text2: {
    top: 77.53,
    left: 36.15,
    width: 93.91,
    height: 42.97,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 28,
    fontWeight: "bold"
  },
  materialButtonLight: {
    top: 464.29,
    left: 75.94,
    width: 122.7,
    height: 42.37,
    position: "absolute"
  }
});
