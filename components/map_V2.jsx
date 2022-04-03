import React from "react";
import {StyleSheet,View, SafeAreaView,Text} from "react-native";
import { Dimensions } from 'react-native';
import MapView from "react-native-maps"; 
import {Permissions} from 'expo';
import * as Location from 'expo-location';

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



export default class Map extends React.Component {
    // Localisation avec Expo

    // state = {
    //     location: {},
    //     errorMessage: ''
    // }

    // componentWillUnmount(){
    //     this._getLocation();
    // }

    // _getLocation = async () => {
    //     const {status} = await Permissions.askAsync(Permissions.LOCATION);

    //     if(status !== 'granted'){
    //         console.log('PERMISSION NOT GRANTED!');

    //         this.setState({
    //             errorMessage: 'PERMISSION NOT GRANTED!'
    //         });
    //     }

    //     const userLocation = await Location.getCurrentPositionAsync();

    //     this.setState({
    //         location
    //     })
    // }


    





    constructor(props){
        super(props)

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            }
        }
    }

    // watchID: ?number = null
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) =>{
            var lat = parseFloat(position.coords.latitude);
            var lng = parseFloat(position.coords.longitude);

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }

            this.setState({initialPosition: initialRegion})
            this.setState({markerPosition: initialRegion})
        }, (error) => alert(JSON.stringify(error)), 
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var lastRegion = {
                latitude: lat,
                longitude: long,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA
            }

            this.setState({initialPosition: lastRegion})
            this.setState({markerPosition: lastRegion})
        })
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }

    render(){
        return ( 
        <SafeAreaView style = {styles.container}>
            <MapView style = {styles.map}
                region = {this.state.initialPosition}>
                <MapView.Marker coordinate={this.state.markerPosition}>
                    <View style={styles.radius}>
                        <View style={styles.marker}></View>
                    </View>
                </MapView.Marker>
            </MapView>
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