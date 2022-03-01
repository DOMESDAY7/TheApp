import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* <img src={logo} alt="logo Icon" /> */}
    </View>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const globalColor = "#111111";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: globalColor,
    width: windowW,
  },
});
