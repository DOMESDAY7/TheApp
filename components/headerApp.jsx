import React from "react";
import { View, StyleSheet, Dimensions,Image,Text } from "react-native";

//le header est récurrent sur toutes les pages
//il ne prend aucune propriété car il est composé d'éléments statiques

export default function HeaderApp() {
  return (
    <View style={styles.contain_header}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
    </View>
  );
}
const windowW = Dimensions.get("window").width;

const styles = StyleSheet.create({
  contain_header:{
    flex:2,
    alignItems: "center",
    justifyContent: "center",
    width:windowW,
    backgroundColor:"#000"
  },
  logo:{
    height:"70%",
    resizeMode:'contain'
  }
})