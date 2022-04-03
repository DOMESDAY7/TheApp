import React from "react";
import {StyleSheet,View, SafeAreaView,Text} from "react-native";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';

export default class Map extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            markerPosition: {
                latitude: 48.88990,
                longitude: 2.32774
            }
        }
    }




    render(){
        return ( 
            <View style = {styles.container}>
                <MapView style = {styles.map}
                    initialRegion = {
                        {
                            latitude: 48.88990,
                            longitude: 2.32774,
                            latitudeDelta: 0,
                            longitudeDelta: 0.05,
                        }
                    }>
                    <MapView.Marker coordinate={this.state.markerPosition}>
                        <View style={styles.radius}>
                            <View style={styles.marker}></View>
                        </View>
                    </MapView.Marker>
                </MapView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    map: {
        // Régler problème flex
        height: 200,
        width: 500,
    }
})