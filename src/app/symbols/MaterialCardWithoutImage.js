import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare from "/src/symbols/MaterialButtonShare.js";

export default class MaterialCardWithoutImage extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Title goes here</Text>
          <Text style={styles.subtitleStyle}>Subtitle here</Text>
        </View>
        <Text style={styles.text}>Text Added</Text>
        <Text style={styles.text2}>Text Added</Text>
        <MaterialButtonShare style={styles.materialButtonShare} />
        <Text style={styles.text3}>ADD A JOURNEY</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
    //fontFamily: "roboto-regular",
    textAlign: "center"
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  text: {
    top: 104,
    left: "31.2%",
    width: 135,
    height: 19,
    color: "#121212",
    position: "absolute",
    textAlign: "center"
  },
  text2: {
    top: 130,
    left: 112.01,
    width: 138.99,
    height: 17,
    color: "#121212",
    position: "absolute",
    textAlign: "center"
  },
  materialButtonShare: {
    top: 185,
    left: 153.5,
    width: 56,
    height: 56,
    position: "absolute"
  },
  text3: {
    top: 248,
    left: 114,
    width: 139,
    height: 21,
    color: "rgba(79,59,41,1)",
    position: "absolute",
    textAlign: "center"
  }
});
