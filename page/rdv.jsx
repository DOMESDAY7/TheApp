import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { useEffect } from "react/cjs/react.development";
// import { useWindowDimensions } from 'react-native';
import { useState } from "react";
import { Root, Popup } from 'react-native-popup-confirm-toast'
import HeaderApp from "../components/headerApp";
import Submitbtn from "../components/submitBtn";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import AppLoading from 'expo-app-loading';

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
<<<<<<< HEAD
export default function Rdv(props) {
=======

export default function Rdv() {
  
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular
  });

>>>>>>> font
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [prestation, setPrestation] = useState("1");
  const [demande, setDemande] = useState("");
  const [prenom, setPrenom] = useState("");
  const [allPrestation, setAllPrestation] = useState([]);

  useEffect(() => {
    let renderUrl =props.urlApi+"?select=prestations";
    fetch(renderUrl)
    .then(resp=>resp.json())
    .then(data=>{
      
      setAllPrestation(data.map((prestation)=>{
        return <Picker.Item label={prestation.prest_nom} value={prestation.id_prestation}/>
      }))
    
    })
  }, []);

  function handleSubmit() {
    console.log("sub")
    let obj = {
      prenom: prenom,
      nom: nom,
      prestation: prestation,
      demande: demande,
      mail: mail
    };
    let url = props.urlApi+"send=rdv";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
      method: "POST",
    })
      .then(() => {
        console.log("c'est bon");
      })
      .catch((e) => console.log(e));
  }
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
  return (
    <View style={styles.containerForm}>
      <HeaderApp/>
      
      <View style={styles.main}>
      <Text style={styles.title}>Bienvenue chez I.C.O.N !</Text>
      <TextInput
        value={nom}
        onChangeText={setNom}
        style={styles.input}
        placeholder="Nom"
      />
      <TextInput
        value={prenom}
        onChangeText={setPrenom}
        style={styles.input}
        placeholder="Prénom"
      />
      <TextInput
        value={mail}
        onChangeText={setMail}
        style={styles.input}
        placeholder="Email"
      />

      <Picker
        selectedValue={prestation}
        onValueChange={(itemValue, itemIndex) => setPrestation({itemValue})}
        style={styles.input}
      >
        {/* <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" /> */}
        {allPrestation}
      </Picker>

      <TextInput
        value={demande}
        onChangeText={setDemande}
        style={styles.textarea}
        placeholder="Demande"
        multiline={true}
        numberOfLines={4}
      />

      <View style={styles.containerSubBtn}>
        <Submitbtn text="Envoyer" method={()=>{handleSubmit()}}/>
      </View>
      <Root>
    <View>
        <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'success',
                title: 'Dikkat!',
                textBody: 'Mutlak özgürlük, kendi başına hiçbir anlam ifade etmez. ',
                buttonText: 'Tamam',
                callback: () => Popup.hide()
              })
            }
        >
            <Text style={styles.texte}>Open Popup Message</Text>
        </TouchableOpacity>
    </View>
  </Root>

    </View>
    </View>
    
  );
}}
const globalColor = "#111111";
const styles = StyleSheet.create({
  containerSubBtn: {
    flex: 1,
    backgroundColor: globalColor
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 25,
    // fontWeight: "bold",
    color: "white",
    marginVertical: "5%",
  },
  
  container: {
    fontFamily: 'Montserrat_400Regular',
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: windowH,
    width: windowW,
  },
  input: {
    // flex: 1,
    borderRadius: 10,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "70%",
    textAlign: "center",
    fontSize: 15,
    borderWidth: 1,
    fontFamily: 'Montserrat_400Regular'
  },
  textarea: {
    flex: 2.5,
    borderWidth: 1,
    width: "70%",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat_400Regular',
  },
  containerForm: {
    backgroundColor: globalColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: windowW,
  },
  texte: {
    fontFamily: 'Montserrat_400Regular'
  },
  main:{
    flex:10,
    alignItems:"center",
    width: '100%'
  }
});
