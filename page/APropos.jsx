import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
  } from "react-native";
import { useEffect, useState } from "react";

function APropos(){
    const [dev,setdev]=useState([]);
    const [social,setSocial]=useState([]);
    useEffect(()=>{
        fetch('http://localhost/api.php?select=equipe_dev')
            .then((res)=>setdev(res.data));
        fetch('http://localhost/api.php?select=salon')
            .then((res)=>setSocial(res.data));
    })
    const oneDev = (dev) => {
        <View>
            <Text>{dev.dev_prenom}</Text>
            <Text>{dev.dev_nom}</Text>
            <Text>{dev.dev_github}</Text>
        </View>
    }
    const oneSocialMedia=(social)=>{
        <View>
            <Text>{social.facebook}</Text>
        </View>
    }
    return(
        <SafeAreaView>
        <Text>A propos du salon</Text>
        <Text>Dans une ambiance chaleureuse, aux pierres et briques apparentes, nous vous accueillons pour un pur moment de relaxation, et de détente.</Text>
        <Text>Grâce à la technologie I.C.O.N., nous garantissons des résultats spectaculaires en matière de traitement et de coloration, aussi bien pour les femmes que pour les hommes.</Text>
        <Text>L'équipe de développeurs</Text>
        <FlatList
            data={dev}
            renderItem={oneDev}
            keyExtractor={dev => dev.id_dev}
        />
        <Text>Nos réseaux</Text>
        <FlatList
            data={social}
            renderItem={oneSocialMedia}
            keyExtractor={social => social.id_salon}
        />
        </SafeAreaView>
    )
}

export default APropos;