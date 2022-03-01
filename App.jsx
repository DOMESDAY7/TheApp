import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  SafeAreaView,
  StyleSheet,

  Dimensions,
} from "react-native";
import HeaderApp from "./components/headerApp";

import Rdv from "./page/rdv";



export default function App() {
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <HeaderApp />
      <Rdv />
    </SafeAreaView>
  );
}
const globalColor = "#111111";
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: windowW,
  },
 
});
