import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Center } from "@builderx/utils";
import MaterialCardWithoutImage from "/src/symbols/MaterialCardWithoutImage.js";

export default class ListJourney extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <Text style={styles.text2}>Awesome!</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text3}>FIRST STEPP</Text>
        </Center>
        <MaterialCardWithoutImage style={styles.materialCardWithoutImage} />
        <StatusBar
          animated={true}
          barStyle={"dark-content"}
          style={styles.statusBar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(178,191,164,1)"
  },
  text2: {
    top: 74.81,
    width: 227.66,
    height: 42.77,
    color: "#121212",
    position: "absolute",
    fontSize: 30,
    textAlign: "center"
  },
  text3: {
    top: 109.3,
    width: 200.06,
    height: 24.84,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    textAlign: "center"
  },
  materialCardWithoutImage: {
    top: 169.36,
    left: 0,
    width: 375,
    height: 307.29,
    position: "absolute",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(178,191,164,1)"
  },
  statusBar: {}
});
