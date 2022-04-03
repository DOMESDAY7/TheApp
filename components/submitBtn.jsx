import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import AppLoading from 'expo-app-loading';


//BOUTON D'ENVOI
//le bouton d'envoi est récurrent sur la page de contact et de rendez-vous
//il prend deux propriétés possible:text et method
//text est le texte qui s'affiche sur le bouton
//method est la méthode qui sera appelée lorsque l'on cliquera sur le bouton


const Submitbtn = (props) => {
  
    let [fontsLoaded] = useFonts({
      Montserrat_700Bold,
      Montserrat_400Regular
    });

    if (!fontsLoaded) {
    return <AppLoading />;
    }else{
      return (
          <TouchableOpacity style={styles.subBtn} onPress={props.method}>
            <Text style={styles.btn}>{props.text}</Text>
          </TouchableOpacity>
      )
    }
}


const styles=StyleSheet.create({

    subBtn: {
        borderWidth: 1,
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        // fontSize: 70,
      },
    btn:{
      fontFamily: 'Montserrat_400Regular',
    }
});
export default Submitbtn;
