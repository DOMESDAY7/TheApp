import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Button, Linking } from "react-native";
import { useEffect, useState, useCallback } from "react";

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
              return <View style = {styles.dev}>
                  <Text style = {styles.devinfo}> {dev.dev_prenom} - {dev.dev_nom} - {dev.github}</Text>
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
  const oneDev = (dev) => {
    <View>
      <Text>{dev.dev_prenom}</Text>
      <Text>{dev.dev_nom}</Text>
      <Text>{dev.dev_github}</Text>
    </View>;
  };

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
  
    return <TouchableOpacity style = {styles.reseau} onPress={handlePress}><Text title={children}>Facebook</Text>
    </TouchableOpacity>;
  };
  // const oneSocialMedia = (social) => {
  //   <View>
  //     <Text>{social.facebook}</Text>
  //   </View>;
  // };
  return (
    <SafeAreaView style = {styles.container}>
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
      <TouchableOpacity style = {styles.contact}>
        <Text>Contactez-nous</Text>
      </TouchableOpacity>
      <Text style = {styles.soustitre}>L'équipe de développeurs</Text>
      <View>{dev}</View>
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
    flex:2,
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
    flex:1,
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
  },
  dev:{
    // flex:1,
    display:"flex",
    alignSelf: "flex-start",
  },
  devinfo:{
    // flex:1,
    color:"white",
  },
  reseau:{
    // flex:1,
    // color:"white",
    width:90,
    height:90,
    backgroundColor:"white",
    borderRadius:50,
  },
  lien:{
    flex:1,
  }
  // allDev:{
  //   flex:1,
  //   flexDirection:"column"
  // },

    
})

export default APropos;
