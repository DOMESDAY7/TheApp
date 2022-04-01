import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';

//BOUTON D'ENVOI
//le bouton d'envoi est récurrent sur la page de contact et de rendez-vous
//il prend deux propriétés possible:text et method
//text est le texte qui s'affiche sur le bouton
//method est la méthode qui sera appelée lorsque l'on cliquera sur le bouton


const Submitbtn = (props) => {
    return (
        <TouchableOpacity style={styles.subBtn} onPress={props.method}>
          <Text>{props.text}</Text>
        </TouchableOpacity>
    );
}


const styles=StyleSheet.create({

    subBtn: {
        borderWidth: 1,
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        fontSize: 70,
      },
});
export default Submitbtn;
