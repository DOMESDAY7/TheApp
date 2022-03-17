import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useEffect, useState } from "react";

function APropos() {
  const [dev, setdev] = useState([]);
  const [social, setSocial] = useState([]);

  useEffect(() => {
    //dev
    fetch("http://172.24.140.187/apiTheApp/index.php?select=equipe_dev")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setdev(
            data.map((dev) => {
              return <View style={styles.dev}>
                  <Text> {dev.dev_prenom} </Text>
                  <Text> {dev.dev_nom} </Text>
                  <Text> {dev.github} </Text>
              </View>;
            })
          );
      });

    //salon
    fetch("http://172.24.140.187/apiTheApp/index.php?select=salon")
      .then((resp) => resp.json())
      .then((data) => {
        setSocial(data);
        console.log(data);
      });
    
  }, []);
  const oneDev = (dev) => {
    <View>
      <Text>{dev.dev_prenom}</Text>
      <Text>{dev.dev_nom}</Text>
      <Text>{dev.dev_github}</Text>
    </View>;
  };
  const oneSocialMedia = (social) => {
    <View>
      <Text>{social.facebook}</Text>
    </View>;
  };
  return (
    <SafeAreaView>
      <Text>A propos du salon</Text>
      <Text>
        Dans une ambiance chaleureuse, aux pierres et briques apparentes, nous
        vous accueillons pour un pur moment de relaxation, et de détente.
      </Text>
      <Text>
        Grâce à la technologie I.C.O.N., nous garantissons des résultats
        spectaculaires en matière de traitement et de coloration, aussi bien
        pour les femmes que pour les hommes.
      </Text>
      <Text>L'équipe de développeurs</Text>
      <FlatList
        data={dev}
        renderItem={oneDev}
        keyExtractor={(dev) => dev.id_dev}
      />
      <Text>Nos réseaux</Text>

      {/* <FlatList
            data={social}
            renderItem={oneSocialMedia}
            keyExtractor={social => social.id_salon}
        /> */}
      <View >{dev}</View>
    </SafeAreaView>
  );
}
const styles= StyleSheet.create({
    allDev:{
        flex:1,
        flexDirection:"column"
    },
    
})

export default APropos;
