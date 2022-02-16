import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image } from "react-native";
import { ScrollView } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>The App</Text>
      <Text>test</Text>
      <Image source={{uri:"./assets/Logo.jpg"}} style={styles.img}/>
      <View style={styles.test}>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    backgroundColor: "red",
    width:2000,
    height:100
  },
  img:{
    width:100,
    hieght:100,
  }
});
