import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Text, TextInput,StyleSheet,Dimensions } from "react-native";
import { useState } from "react";
import DatePicker from "react-native-datepicker";

export default function Rdv(){
  const [prenom, setInput] = useState("");
  const [nom, setNom] = useState("");
  const [prestation, setPrestation] = useState("");
  const [demande, setDemande] = useState("");
  function handleSubmit(){
    let obj ={
      prenom:prenom,
      nom:nom,
      prestation:prestation,
      demande:demande
    }
    let url = "http://localhost/apiTheApp/index.php?select=salon";
    fetch(url,{
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj),
      method:"POST"
    }).then(()=>{
      console.log("c'est bon")
    })
    .catch((e)=>console.log(e))
  }
  return (
    <View style={styles.containerForm}>
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

      <Picker
        selectedValue={prestation}
        onValueChange={(itemValue, itemIndex) => setPrestation(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
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
        <TouchableOpacity style={styles.subBtn} onClick={handleSubmit()}>
          <Text>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const globalColor = "#111111";
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({
  containerSubBtn: {
    flex: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginVertical: "5%",
  },
  subBtn: {
    borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    fontSize:70
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: windowW,
  },
  input: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    width: "80%",
    textAlign: "center",
    fontSize: 15,
    borderWidth: 1,
  },
  textarea: {
    flex: 5,
    borderWidth: 1,
    width: "80%",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
  },
  containerForm: {
    backgroundColor: globalColor,
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    width: windowW,
  },
});
