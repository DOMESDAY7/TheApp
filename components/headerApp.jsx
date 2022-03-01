import React from "react";
import { View, StyleSheet, Dimensions,Image,Text } from "react-native";
import logo from "../assets/logo.png";

export default function HeaderApp() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
    </View>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const globalColor = "#111111";
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width:windowW,
    height:90,
    backgroundColor:globalColor,
  },
  logo:{
    flex:1,
    width:"30%",

    
  }
})
