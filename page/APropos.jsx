import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Button, Linking, Image, ScrollView } from
"react-native";
import { useEffect, useState, useCallback } from "react";
import { Dimensions } from 'react-native';
import Map from "../components/map";
import HeaderApp from "../components/headerApp";

const windowW = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function APropos() {
const [dev, setdev] = useState([]);
const [social, setSocial] = useState([]);

useEffect(() => {
//dev
fetch("http://172.24.140.219/apiTheApp/index.php?select=equipe_dev")
.then((resp) => resp.json())
.then((data) => {
// console.log(data);
setdev(
data.map((dev) => {
return <View>
  <Text style={styles.devinfo}> {dev.dev_prenom} - {dev.dev_nom} - {dev.github}</Text>
</View>;
})
);
});

//salon
fetch("http://172.24.140.219/apiTheApp/index.php?select=salon")
.then((resp) => resp.json())
.then((data) => {
setSocial(data);
console.log(data);
});

}, []);

const supportedURL = "https://www.facebook.com/lesaloniconparis";
const OpenURLButton = ({ url, children }) => {
const handlePress = useCallback(async () => {
// Checking if the link is supported for links with custom URL scheme.
const supported = await Linking.canOpenURL(url);

if (supported) {
// Opening the link with some app, if the URL scheme is "http" the web link should be opened
// by some browser in the mobile
await Linking.openURL(url);
} else {
Alert.alert(`Don't know how to open this URL: ${url}`);
}
}, [url]);

return <TouchableOpacity onPress={handlePress}>
  <Image style={styles.tinyLogo}
    source={{uri:'https://www.meilleure-innovation.com/wp-content/uploads/2021/11/1200px-facebook-logo-2019-1024x1024.png'}} />
</TouchableOpacity>;
};

return (
<SafeAreaView style={styles.container}>
    <HeaderApp/>
    <Image style={styles.imageHeader} source={{
        uri: 'https://cdn1.treatwell.net/images/view/v2.i2500346.w720.h480.x122C1F52/',
      }} />
  <ScrollView contentContainerStyle={{
      justifyContent: 'space-between',
      height: windowHeight,
  }}>
    <Text style={styles.titre}>A propos du salon</Text>
    <Text style={styles.intro}>
      Dans une ambiance chaleureuse, aux pierres et briques apparentes, nous
      vous accueillons pour un pur moment de relaxation, et de détente.
    </Text>
    <Text style={styles.intro}>
      Grâce à la technologie I.C.O.N., nous garantissons des résultats
      spectaculaires en matière de traitement et de coloration, aussi bien
      pour les femmes que pour les hommes.
    </Text>
    <TouchableOpacity style={styles.contact}>
      <Text>Contactez-nous</Text>
    </TouchableOpacity>
    <Text style={styles.soustitre}>L'équipe de développeurs</Text>
    <View style={styles.dev}>{dev}</View>
    <Text style={styles.soustitre}>Rejoignez-nous !</Text>
    <OpenURLButton url={supportedURL} style={styles.lien}>Open Supported URL</OpenURLButton>
    <Text style={styles.soustitre}>D'où vennons nous</Text>
    <Map style={styles.map} />
  </ScrollView>
</SafeAreaView>
);
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
  backgroundColor: "black",
  color: "white",
  padding: 25,
  },
  imageHeader: {
    flex:2,
    width: windowW,
    height: 50,
},
  titre:{
  color:"white",
  fontWeight: "bold",
  textAlign:"center",
  fontSize:22,
  marginBottom: 20,
  marginTop: 15,
  },
  intro:{
  color:"white",
  textAlign: "center",
  marginLeft:"auto",
  marginRight:"auto",
  fontSize:16,
  marginBottom: 15,
  },
  contact:{
  backgroundColor:"white",
  alignSelf: "flex-start",
  padding:10,
  borderRadius:10,
  marginLeft:"auto",
  marginRight:"auto",
  marginTop: 20,
  // marginBottom: 20,
  },
  soustitre:{
  color:"white",
  fontSize: 18,
  fontWeight:"bold",
  marginTop: 30,
  marginBottom: 10,
  },
  dev:{
  // flex:1,
  },
  devinfo:{
  color:"white",
  },
  lien:{
  // flex:1,
  },
  tinyLogo: {
  width: 50,
  height: 50,
  },
  })

export default APropos;