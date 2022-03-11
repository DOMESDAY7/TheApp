import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TextInput,
    Button,
  } from "react-native";
import { useEffect, useState } from "react";

function aPropos(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost/api.php?select=equipe_dev')
            .then((res)=>console.log(res));
    })

    return(
        <SafeAreaView>
        <Text>A propos du salon</Text>
        <Text>Dans une ambiance chaleureuse, aux pierres et briques apparentes, nous vous accueillons pour un pur moment de relaxation, et de détente.</Text>
        <Text>Grâce à la technologie I.C.O.N., nous garantissons des résultats spectaculaires en matière de traitement et de coloration, aussi bien pour les femmes que pour les hommes.</Text>
        <Text>L'équipe de développeurs</Text>
        <Text>Nos réseaux</Text>
        </SafeAreaView>
    )
}