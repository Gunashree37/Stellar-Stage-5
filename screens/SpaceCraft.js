import React, { Component } from 'react';
import { Text, View, Alert, Image, ImageBackground, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import axios from 'axios';

export default class SpaceCraftsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aircrafts: []
        };
    }

    componentDidMount() {
        this.getData()

    }

    getData = () => {
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
            .then(response => {

                this.setState({ aircrafts: response.data.results })

            })
            .catch(error => {
                console.log(error.message)
            })

    }




    renderItem = ({ item }) => {
        return (
            <View style={styles.contentCard}>
                <Image source={{ uri: item.agency.image_url }} style={styles.itemImage}></Image>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>{item.name}</Text>
                    <Text style={{ color: '#696969', fontSize: 16 }}>{item.agency.name}</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#A9A9A9', fontSize: 13 }}>{item.agency.description}</Text>
                    </View>
                </View>
            </View>
        )
    }

    keyExtractor = (item, index) => index.toString();

    render() {
        if (Object.keys(this.state.aircrafts).length === 0) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.titleText}>Spacecrafts</Text>
                        </View>
                        <View style={{ flex: 0.85 }}>
                            
                            
                            
                            
                            
                            
                            
                        </View>



                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
   
    
    
    
})
