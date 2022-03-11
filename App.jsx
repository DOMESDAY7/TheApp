import React from "react";
import {Text, View, Image  } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import Accueil from "./components/accueil";
// import { StatusBar } from "expo-status-bar";
// import Header from "./components/header";
// import rdv from "./page/rdv";
// import {NavigationContainer} from './react-navigation/native'; 
// import {createNativeStackNavigator} from './react-navigation/native-stack';

export default function App() {
  // const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <Accueil style={styles.accueil}/>
    </View>
  
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="accueil" component={accueil}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: 1,
  }
  // accueil:{
  //   flex:1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   // backgroundColor:"white",
  //   width: '100%',
  // }
})
