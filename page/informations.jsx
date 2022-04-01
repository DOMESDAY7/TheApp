import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Button, Linking, Image } from "react-native";
import { useEffect, useState, useCallback } from "react";
import HeaderApp from "../components/headerApp";
import Contact from "./contact";

// const ButtonContact =({navigation}) =>{
//   return (
//     <TouchableOpacity style = {styles.contact} onPress={navigation.navigate('Contact')}>
//     <Text>Contactez-nous</Text>
//     </TouchableOpacity>
//   );
// }

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

  return( 
      <TouchableOpacity onPress={handlePress}>
      <Image style={styles.tinyLogo}
      source={{uri:'https://www.meilleure-innovation.com/wp-content/uploads/2021/11/1200px-facebook-logo-2019-1024x1024.png'}}/>
      </TouchableOpacity>
  )
};

function Informations({navigation}) {
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
              return( 
                <View>
                    <Text style = {styles.devinfo}> {dev.dev_prenom} - {dev.dev_nom} - {dev.github}</Text>
                </View>
              )
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

  return (
    <SafeAreaView style = {styles.container}>
      <HeaderApp/>
      <Text style = {styles.header}></Text>
      <Text style = {styles.titre}>A propos du salon</Text>
      <Text style = {styles.intro}>
        Dans une ambiance chaleureuse, aux pierres et briques apparentes, nous
        vous accueillons pour un pur moment de relaxation, et de détente.
      </Text>
      <Text style = {styles.intro}>
        Grâce à la technologie I.C.O.N., nous garantissons des résultats
        spectaculaires en matière de traitement et de coloration, aussi bien
        pour les femmes que pour les hommes.
      </Text>
      <TouchableOpacity style = {styles.contact} onPress={()=>navigation.navigate(Contact)}>
      <Text>Contactez-nous</Text>
      </TouchableOpacity>
      <Text style = {styles.soustitre}>L'équipe de développeurs</Text>
      <View style = {styles.dev}>{dev}</View>
      {/* <FlatList
        data={dev}
        renderItem={oneDev}
        keyExtractor={(dev) => dev.id_dev}
      /> */}
      <Text style = {styles.soustitre}>Rejoignez-nous !</Text>
      
      <OpenURLButton url={supportedURL} style={styles.lien}>Open Supported URL</OpenURLButton>

      {/* <FlatList
            data={social}
            renderItem={oneSocialMedia}
            keyExtractor={social => social.id_salon}
        /> */}
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
  header:{
    flex:1,
  },
  titre:{
    flex: 1.5,
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
    margin:10,
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
    width: 40,
    height: 40,
  },
})

export default Informations;