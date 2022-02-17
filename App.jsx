import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView,StyleSheet } from "react-native";

import Rdv from "./page/rdv";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Rdv />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"white",
    
    
    
  }
})
