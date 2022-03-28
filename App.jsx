import React from "react";

import { Text, View, Image } from "react-native";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Accueil from "./page/accueil";
import Rdv from "./page/rdv";
import APropos from "./page/APropos";

const Stack = createNativeStackNavigator();
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* The different routes */}
      <Tab.Navigator 
      initialRouteName="Accueil"
      screenOptions={{
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#000'
      }}>
        {/* Buttons of menu */}
        <Tab.Screen name="Accueil" component={Accueil} 
        options={{
          tabBarLabel: "Accueil",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color="#fff" size={size*1.7} />
          ),
        }}/>
        <Tab.Screen name="RDV" component={Rdv} 
        options={{
          tabBarLabel: "RDV",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" color="#fff" size={size*1.5}/>
          ),
        }}/>
        <Tab.Screen name="A propos" component={APropos} 
        options={{
          tabBarLabel: "A propos",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-outline" color="#fff" size={size*1.7} />
          ),
        }}/>
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
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  tabBar: {
    backgroundColor: "#fff"
  }
});
