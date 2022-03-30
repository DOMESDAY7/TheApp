import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Button, Linking, Image, ScrollView } from
"react-native";
import { useEffect, useState, useCallback } from "react";
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';
// import Map from "../components/map";

function APropos() {
const [dev, setdev] = useState([]);
const [social, setSocial] = useState([]);

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

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
// const oneDev = (dev) => {
// <View>
  // <Text>{dev.dev_prenom}</Text>
  // <Text>{dev.dev_nom}</Text>
  // <Text>{dev.dev_github}</Text>
  // </View>;
// };

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
// const oneSocialMedia = (social) => {
// <View>
  // <Text>{social.facebook}</Text>
  // </View>;
// };


return (
<SafeAreaView style={styles.container}>
  <Text style={styles.header}></Text>
  <ScrollView contentContainerStyle={{
      // flex: 1,
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
    {/* <Map style={styles.map} /> */}
    <View >
      <MapView  style={styles.map} initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} />
    </View>
  </ScrollView>
</SafeAreaView>
);
}

const styles= StyleSheet.create({
container:{
flex: 1,
alignItems: "center",
justifyContent: "center",
backgroundColor: "black",
color: "white",
padding: 25,
},
header:{
flex: 2,
borderColor: "red",
borderWidth: 1,
},
titre:{
flex: 1,
color:"white",
fontWeight: "bold",
textAlign:"center",
fontSize:22,
},
intro:{
flex:2,
color:"white",
textAlign: "center",
marginLeft:"auto",
marginRight:"auto",
fontSize:16,
},
contact:{
// flex:1,
backgroundColor:"white",
alignSelf: "flex-start",
padding:10,
borderRadius:10,
marginLeft:"auto",
marginRight:"auto",
},
soustitre:{
flex:1,
color:"white",
fontSize: 18,
fontWeight:"bold",
marginTop: 30,
},
dev:{
flex:1,
},
devinfo:{
// flex:1,
color:"white",
},
lien:{
flex:1,
},
tinyLogo: {
width: 50,
height: 50,
},
map:{
// Régler problème flex
height:500,
width: 500,
}
})

export default APropos;