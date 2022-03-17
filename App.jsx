import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView,StyleSheet } from "react-native";
import Header from "./components/header";
import Rdv from "./page/rdv";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Accueil from "./components/accueil";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="accueil" component={Accueil}/>
    //     <Stack.Screen name="rendez-vous" component={Rdv}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Rdv />
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
