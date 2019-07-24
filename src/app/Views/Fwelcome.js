/*import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHelperTextBox from "../symbols/MaterialHelperTextBox.js";
import MaterialButtonDark from "../symbols/MaterialButtonDark.js";
import CountryPicker from 'react-native-country-picker-modal';


const MAX_LENGTH_CODE = 4;
const MAX_LENGTH_NUMBER = 20;

// if you want to customize the country picker
const countryPickerCustomStyles = {};


export default class Untitled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
      spinner: false,
      country: {
        cca2: 'US',
        callingCode: '1'
      }
    };
  }




  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text2}>STEPP</Text>
        <Text style={styles.text3}>Welcome!</Text>
        <Text style={styles.text4}>
          Please confirm your country code and enter your phone number.
        </Text>
        <MaterialHelperTextBox style={styles.materialHelperTextBox} />
        <MaterialButtonDark style={styles.materialButtonDark} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(166,166,166,1)"
  },
  text2: {
    top: 90,
    left: 32.41,
    width: 105.68,
    height: 48.78,
    color: "#121212",
    position: "absolute",
    fontSize: 25
  },
  text3: {
    top: 219.38,
    left: 32.41,
    width: 170.71,
    height: 36.58,
    color: "#121212",
    position: "absolute",
    fontSize: 30,
    textAlign: "left"
  },
  text4: {
    top: 296.61,
    left: 34.44,
    width: 304.84,
    height: 77.23,
    color: "#121212",
    position: "absolute",
    fontSize: 22
  },
  countryPicker: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  materialHelperTextBox: {
    top: 406,
    left: 32.4,
    width: 325.67,
    height: 78.52,
    position: "absolute",
    right: 4.2,
    bottom: 327.46,
    opacity: 0.48,
    borderRadius: 1,
    overflow: "visible",
    textDecorationLine:"underline",
    textDecorationColor:"#000",
    textDecorationStyle:"solid"

  },
  materialButtonDark: {
    top: 530,
    left: -0.64,
    width: 415,
    height: 59.87,
    position: "absolute"
  }
});
*/