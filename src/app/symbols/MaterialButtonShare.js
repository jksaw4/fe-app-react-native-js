import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class MaterialButtonShare extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          name={"plus"}
          type={"MaterialCommunityIcons"}
          style={styles.icon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(84,66,51,1)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "#fff",
    fontFamily: "roboto-regular",
    fontSize: 24,
    alignSelf: "center"
  }
});
