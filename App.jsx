import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView,StyleSheet,Text } from "react-native";
import HeaderApp from "./components/headerApp";

import Rdv from "./page/rdv";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
        <HeaderApp />  
        <Text style={{flex:8}}>Bonjour</Text>
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
