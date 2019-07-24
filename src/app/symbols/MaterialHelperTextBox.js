import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

export default class MaterialHelperTextBox extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput
          placeholder={this.props.inputStyle || ""}
          autoCapitalize={"none"}
          keyboardType={"numeric"}
          returnKeyType={"next"}
          dataDetector={"phoneNumber"}
          style={styles.inputStyle}
        />
        <Text style={styles.helper}>
          {this.props.helper ||
            "By Proceeding you agree to the Term of Service."}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent"
  },
  inputStyle: {
    width: "100%",
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 1,
    fontSize: 16,
    //fontFamily: "roboto-regular",
    lineHeight: 16,
    textDecorationLine:"underline",
    textDecorationColor:"#000",
    textDecorationStyle:"solid"
  },
  helper: {
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
    fontSize: 12,
    //fontFamily: "roboto-regular",
    textAlign: "left"
  }
});
