import React, { useState, useEffect } from 'react';

// activity indicator will show something while the map is loading
// no lugar do ComponentDidMount, usamos agora o useEffect
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    Alert
} from 'react-native';

// meus imports
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function Agenda({ navigation }) {
    const [loading, setLoading] = useState(true);
    // estado com a localização do usuário
    const [coordinates, setCoordinates] = useState({});

    useEffect(() => {
        // recebe 3 params, sendo o primeiro o que fazer quando tiver sucesso
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                setCoordinates(coords);
                setLoading(false);
            }
        );
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
            {/* Main page content */}
            {/* condicional para caso esteja carregando, mostrar o loading, caso contrário, mostrar o mapa */}
            {/* vamos buscar a localização do usuário usando o hook useEffect */}
            <View>
                <Text style={styles.text}>Agenda do evento</Text>
                <Text style={styles.text}>O que tem por perto?</Text>
            </View>
            <View style={{height: 250}}>
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : (

                        <MapView
                            // recebe objeto  como param
                            // latitudeDelta e longitudeDelta são props para definir o zoom do mapa
                            initialRegion={{
                                latitude: coordinates.latitude,
                                longitude: coordinates.longitude,
                                latitudeDelta: 0.0068,
                                longitudeDelta: 0.0068
                            }}
                            style={styles.map}
                        >
                        </MapView>

                    )}
            </View>
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    scrollView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: 250
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#6e2969'
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#6e2969',
        borderRadius: 4,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    }
});