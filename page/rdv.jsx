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

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
export default function Rdv() {
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [prestation, setPrestation] = useState("1");
  const [demande, setDemande] = useState("");
  const [prenom, setPrenom] = useState("");
  const [allPrestation, setAllPrestation] = useState([]);
  useEffect(() => {
    fetch("http://192.168.140.239/apiTheApp/index.php?select=prestations")
    .then(resp=>resp.json())
    .then(data=>{
      
      setAllPrestation(data.map((prestation)=>{
        return <Picker.Item label={prestation.prest_nom} value={prestation.id_prestation} />
      }))
    
    })
    
    
  }, []);

  function handleSubmit() {
    // const { windowH, windowW } = useWindowDimensions();
    console.log("sub")
    let obj = {
      prenom: prenom,
      nom: nom,
      prestation: prestation,
      demande: demande,
      mail: mail
    };
    let url = "http://192.168.140.239/apiTheApp/index.php?send=rdv";
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
  return (
    <View style={styles.containerForm}>
      <HeaderApp/>
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
        placeholder="mail"
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
        <Submitbtn text="Envoyer" method={()=>{handleSubmit()}} />
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
            <Text>Open Popup Message</Text>
        </TouchableOpacity>
    </View>
</Root>

    </View>
    
  );
}
const globalColor = "#111111";
const styles = StyleSheet.create({
  containerSubBtn: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginVertical: "5%",
  },
  
  container: {
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
  },
  containerForm: {
    backgroundColor: globalColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: windowW,
  },
});
