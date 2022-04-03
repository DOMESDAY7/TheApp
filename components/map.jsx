import React from "react";
import {StyleSheet,View, SafeAreaView,Text} from "react-native";
import { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import MapView from "react-native-maps";

export default function Position() {
    const [pin, setPin] = React.useState({
        latitude: 48.88990,
        longitude: 2.32774,
    })

    // Popup de demande d'autorisation
    React.useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log(location);

        //   Position de l'utilisateur
          setPin({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
          })
        })();
      }, []);
    
        return ( 
            <View style = {styles.container}>
                {/* Création de la map */}
                <MapView style = {styles.map}
                    initialRegion = {
                        {
                            latitude: 48.88990,
                            longitude: 2.32774,
                            latitudeDelta: 0,
                            longitudeDelta: 0.05,
                        }
                    }
                    showsUserLocation={true}>
                        {/* Marker de la position du salon */}
                    <Marker 
                    coordinate={{latitude: 48.88990,longitude: 2.32774}}>
                        {/* Titre qui apparait au clic sur le marker */}
                        <Callout>
                            <Text>Salon ICON Paris</Text>
                        </Callout>
                    </Marker>
                </MapView>
            </View >
        );
}

const styles = StyleSheet.create({
    map: {
        // Régler problème flex
        height: 200,
        width: 500,
    }
})