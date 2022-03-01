import React from "react";
import {Text, View, StyleSheet  } from "react-native";

export default function Accueil() {
    return(
        <View style={styles.container}>
            <Text style={styles.titre}>Bienvenue chez I.C.O.N !{"\n"}</Text>
            <Text style={styles.texte}>Le Salon I.C.O.N. Paris vous accueille dans ses 130m2 au ­cœur de Paris, à quelques pas de Montmartre.{"\n\n"}
            Dans une ambiance chaleureuse, aux pierres et briques apparentes, nous vous accueillons pour un pur moment de relaxation, et de détente.{"\n\n"}
            Stéphanie et Philippe, nos experts I.C.O.N. seront à l’écoute de vos souhaits et s’efforceront de satisfaire vos attentes.{"\n\n"}
            Grâce à la technologie I.C.O.N., nous garantissons des résultats spectaculaires en matière de traitement et de coloration, aussi bien pour les femmes que pour les hommes.</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginRight: 'auto',
        marginLeft:'auto',
    },
    titre: {
        // flex: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    texte:{ 
        // flex: 6,
    }
});