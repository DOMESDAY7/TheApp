import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
import DatePicker from "react-native-datepicker";

export default function Rdv(){
  const [prenom, setInput] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState(false);
  const [date, setDate] = useState(new Date());
  function changePrenom(event) {
    setInput(event.currentTarget.value);
  }
  function changeNom(event) {
    setNom(event.currentTarget.value);
  }
  function changeEmail(event) {
    setEmail(event.currentTarget.value);
  }
  function sendData() {
    fetch("", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prenom: prenom, nom: nom, email: email }),
    }).then(setmessage(true));
  }
  return (
    <View>
      <View style={styles.container}>
        <Text>l'image sera là</Text>

        <TextInput
          value={prenom}
          style={styles.input}
          onChange={changePrenom}
          placeholder="Prenom"
        />
        <TextInput
          value={nom}
          style={styles.input}
          onChange={changeNom}
          placeholder="Nom"
        />
        <TextInput
          value={email}
          style={styles.input}
          onChange={changeEmail}
          placeholder="Email"
          autoComplete="email"
        />
        {/* <TextInput value={prenom} style={styles.input} onChange={changeInput} placeholder="Prenom"/> */}
        <DatePicker
          style={{ width: 200 }}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
        />
        <Button
          title="Prendre rendez-vous"
          style={styles.subBtn}
          onClick={sendData}
        />
        <Text>
          {message == false
            ? ""
            : "Votre rendez vous est pris, un email de confirmation vous a été envoyé"}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subBtn: {
    backgroundColor: "red",
    width: 2000,
    height: 100,
  },
  img: {
    width: 100,
    height: 100,
  },
  input: {
    borderWidth:1,
    padding:10,
    
    width:100,
    borderRadius:10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
   
  },
});

export default Rdv;
