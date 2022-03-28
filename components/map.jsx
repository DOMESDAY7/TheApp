import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Button, Linking, Image, ScrollView } from "react-native";
import { useEffect, useState, useCallback } from "react";
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
   
function Map() {
return (
<View style={styles.container}>
    <MapView style={styles.map} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} 
      />
</View>
);
}

const styles= StyleSheet.create({
container:{
// flex: 1,
alignItems: "center",
justifyContent: "center",
backgroundColor: "black",
color: "white",
padding: 25,
},
map:{
    // Régler problème flex
    height:"10px",
    width:"10px",
}
})

export default Map;