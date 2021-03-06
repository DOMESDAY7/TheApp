import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import Submitbtn from "../components/submitBtn";
import HeaderApp from "../components/headerApp";
import { Toast } from "react-native-popup-confirm-toast";

const Contact = (props) => {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit() {
    let obj = {
      mail: mail,
      message: message,
    };
    fetch(props.urlApi + "?send=contact", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(obj),
    }).then(() => {
      Toast.show({
        title: "Message envoyé!",
        text: "On vous répondra sous peu 😉",
        color: "#111111",
        timeColor: "#fff",
        timing: 5000,
        backgroundColor: "#000000",
        position: "bottom",
      });
    })
    .catch((err) => {
      console.log(err);
      Toast.show({
        title: "Message non envoyé 🥲",
        text: "Une erreur est survenue",
        color: "#111111",
        timeColor: "#fff",
        timing: 5000,
        backgroundColor: "#000000",
        position: "bottom",
      });
    });
  }

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.containerContact}>
        <HeaderApp />
        <View style={styles.main}>
          <Text style={styles.titleContact}>Contactez-nous</Text>
          <TextInput
            placeholder="Email"
            onChangeText={setMail}
            style={styles.inputMail}
           
          />
          <TextInput
            placeholder="Votre Message"
            onChangeText={setMessage}
            style={styles.inputMessage}
          />
          <View style={styles.containerSubBtn}>
            <Submitbtn
              text="Envoyer"
              method={() => {
                handleSubmit();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
};

export default Contact;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  containerSubBtn: {
    // flex:5,
  },
  textSubBtn: {
    color: "white",
  },
  subBtn: {
    borderRadius: 10,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    // flex:1,
    width: windowWidth / 2,
    // height:windowHeight/10,
  },
  titleContact: {
    fontFamily: "Montserrat_400Regular",
    // flex: 1.5,
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginVertical: 30,
  },
  inputMail: {
    borderWidth: 1,
    // flex:2,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: (windowWidth * 60) / 100,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: "Montserrat_400Regular",
  },
  inputMessage: {
    borderWidth: 1,
    // flex:4,
    height: 160,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: (windowWidth * 80) / 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 15,
    fontFamily: "Montserrat_400Regular",
  },
  containerContact: {
    backgroundColor: "#111111",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat_400Regular",
  },
  main: {
    flex: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
