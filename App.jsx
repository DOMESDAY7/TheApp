import React from "react";

import {Text, View, Image  } from "react-native";
import { SafeAreaView,StyleSheet,Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Constants from "expo-constants";
import Header from "./components/header";
import Accueil from "./page/accueil";
import Rdv from "./page/rdv";

const Stack = createNativeStackNavigator();
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="RDV" component={Rdv} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const globalColor = "#111111";
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: 1,
  }
})