import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image,SafeAreaView,TextInput,Button } from "react-native";
import {useState} from "react";
import { ScrollView } from "react-native-web";

export default function App() {
  const [prenom, setInput] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  function changePrenom(event){
    setInput(event.currentTarget.value)
  }
  function changeNom(event){
    setNom(event.currentTarget.value)
  }
  function changeEmail(event){
    setEmail(event.currentTarget.value)
  }
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <Text>l'image sera là</Text>
        
        <TextInput value={prenom} style={styles.input} onChange={changePrenom} placeholder="Prenom"/>
        <TextInput value={nom} style={styles.input} onChange={changeNom} placeholder="Nom"/>
        <TextInput value={email} style={styles.input} onChange={changeEmail} placeholder="Email" autoComplete="email"/>
        {/* <TextInput value={prenom} style={styles.input} onChange={changeInput} placeholder="Prenom"/> */}

        <Button title="Prendre rendez-vous"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    backgroundColor: "red",
    width:2000,
    height:100
  },
  img:{
    width:100,
    hieght:100,
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
    borderRadius:10,
    outlineStyle :"none"
  }
});
