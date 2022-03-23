import React from "react";
import {Text, View, Image, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import HeaderApp from "../components/headerApp";

export default function Accueil() {
return(
        
<SafeAreaView style={styles.contain_accueil}>
    
    <HeaderApp/>
    <Image style={styles.imageHeader} source={{
        uri: 'https://cdn1.treatwell.net/images/view/v2.i2500346.w720.h480.x122C1F52/',
      }} />
    <View style={styles.containerTexte}>
        <Text style={styles.titre}>Bienvenue chez I.C.O.N !{"\n"}</Text>
        <Text style={styles.texte}>Le Salon I.C.O.N. Paris vous accueille dans ses 130m2 au ­cœur de Paris, à quelques pas
        de Montmartre.{"\n\n"}
        Dans une ambiance chaleureuse, aux pierres et briques apparentes, nous vous accueillons pour un pur moment de
        relaxation, et de détente.{"\n\n"}
        Stéphanie et Philippe, nos experts I.C.O.N. seront à l’écoute de vos souhaits et s’efforceront de satisfaire vos
        attentes.{"\n\n"}
        Grâce à la technologie I.C.O.N., nous garantissons des résultats spectaculaires en matière de traitement et de
        coloration, aussi bien pour les femmes que pour les hommes.</Text>
    </View>
</SafeAreaView>
);
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({
    contain_accueil: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    imageHeader: {
        flex:2,
        width: windowW,
        height: 50,
    },
    containerTexte:{
        flex: 8,
        width: '80%',
        marginRight: 'auto',
        marginLeft:'auto',
        marginTop: 20
    },
    titre: {
    // flex: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }
    });