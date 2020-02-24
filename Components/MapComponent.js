import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import * as Permission from 'expo-permissions'
import ImageComponent from './ImageComponent'

export default class MapComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: { // default region
                latitude: 0,
                longitude: 0,
                latitudeDelta: 15,
                longitudeDelta: 15
            },
            coordinate: [
                {
                    latitude: 0,
                    longitude: 0
                }
            ]
        };
        Permission.askAsync(Permission.LOCATION)
        navigator.geolocation.watchPosition(this.onSuccess, this.onError)
    }
    onSuccess = (position) => {
        let region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 15,
            longitudeDelta: 15
        }
        this.setState({ region: region });
    }
    onError = (error) => {
        console.log(error)
    }
    onRegionChange = (region) => {
        this.setState({ region: region });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ alignSelf: 'center', fontSize: 17, margin: 10 }}>This is MAPs integration demo</Text>
                <MapView style={{ flex: 0.7 }}
                    ref='map'
                    showsUserLocation={true}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                >
                    <Marker
                        coordinate={{
                            latitude: this.state.region.latitude,
                            longitude: this.state.region.longitude,
                        }}
                        title='Apple headquarter California'
                        description='Apple Park is the corporate headquarters of Apple Inc., located at One Apple Park Way in Cupertino, California, United States'
                        identifier='1'
                    >
                    </Marker>
                    <Polyline
                        strokeWidth={5}
                        strokeColor='blue'
                        coordinates={this.state.coordinate}
                    >
                    </Polyline>
                </MapView>
                <View style={{ flex: 0.2, flexDirection: 'row',justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.onDeathValley}>
                        <Text style={styles.loginButtonText}>Death Valley National Park</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.onSacramento}>
                        <Text style={styles.loginButtonText}>Sacramento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.onVisalia}>
                        <Text style={styles.loginButtonText}>Visalia</Text>
                    </TouchableOpacity>
                </View>
                <ImageComponent></ImageComponent>
            </View>
        );
    }
    onDeathValley = () => {
        this.setState({
            coordinate: [
                {
                    latitude: this.state.region.latitude,
                    longitude: this.state.region.longitude
                },
                {
                    latitude: 37.1890661,
                    longitude: -121.9855076
                },
                {
                    latitude: 36.067058,
                    longitude: -120.073996
                },
                {
                    latitude: 35.254789,
                    longitude: -118.590841
                },
                {
                    latitude: 35.111120,
                    longitude: -118.305197
                },
                {
                    latitude: 35.646994,
                    longitude: -117.510480
                },
                {
                    latitude: 36.339737,
                    longitude: -117.420246
                }
                
            ]
        })
    }
    onSacramento = () => {
        this.setState({
            coordinate: [
                {
                    latitude: this.state.region.latitude,
                    longitude: this.state.region.longitude
                },
                {
                    latitude: 37.406835,
                    longitude: -121.912365
                },
                {
                    latitude: 37.729034,
                    longitude: -121.942577
                },
                {
                    latitude: 38.054163,
                    longitude: -122.126598
                },
                {
                    latitude: 38.138461,
                    longitude: -122.112865
                },
                {
                    latitude: 38.401534,
                    longitude: -121.937084
                },
                {
                    latitude: 38.581683,
                    longitude: -121.493924
                }
                
            ]
        })
    }
    onVisalia = () => {
        this.setState({
            coordinate: [
                {
                    latitude: this.state.region.latitude,
                    longitude: this.state.region.longitude
                },
                {
                    latitude: 37.241797,
                    longitude: -121.756505
                },
                {
                    latitude: 37.051329,
                    longitude: -121.047887
                },
                {
                    latitude: 36.891142,
                    longitude: -120.811681
                },
                {
                    latitude: 36.417403,
                    longitude: -120.374975
                },
                {
                    latitude: 36.254335,
                    longitude: -120.245841
                },
                {
                    latitude: 36.262534,
                    longitude: -119.842138
                },
                {
                    latitude: 36.330152,
                    longitude: -119.292348
                }
                
            ]
        })
    }
}
const styles = StyleSheet.create({
    loginButtonContainer: {
        top: 20,
        backgroundColor: '#4285F4',
        width: Dimensions.get('window').width / 3 - 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
    },
    loginButtonText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})