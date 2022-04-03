import React from "react";
import {StyleSheet,View, SafeAreaView,Text} from "react-native";
import MapView from "react-native-maps";

export default class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            ready: false,
            where: {
                lat: null, lng: null
            }, 
            error: null
        }
    }
    componentDidMount() {
        navigator.geaolocation.getCurrentPosition((position) =>{
            var lat = parseFloat(position.coords.latitude);
            var lng = parseFloat(position.coords.longitude);

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        })
        // let geoOptions = {
        //     enableHighAccuracy: true,
        //     timeOut: 10000,
        //     maximumAge: 60 * 60 * 24
        // };
        this.setState({ready: false, error: null});
        // navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions);
    }
    geoSuccess = (position) => {
        this.setState({
            ready: true,
            where:{
                lat: position.coords.latitude, 
                lng: position.coords.longitude
            }
        });
    }
    geoFailure = (err) => {
        this.setState({error: err.message});
    }
    render(){
        return ( 
        <SafeAreaView>
            { !this.state.ready && (
            <Text>Localisation : </Text>
            )}
            { this.state.error && (
            <Text>{this.state.error}</Text>
            )}
            { this.state.ready && (
                <Text>{
                    `Latitude: ${this.state.where.lat}
                    Longitude: ${this.state.where.lng}`
                }</Text>
            )}
            <View style = {styles.container}>
                <MapView style = {styles.map}
                    initialRegion = {
                        {
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }
                    }/>
            </View >
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        // Régler problème flex
        height: 500,
        width: 500,
    }
})