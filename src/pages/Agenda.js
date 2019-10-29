import React, { useState, useEffect } from 'react';

// activity indicator will show something while the map is loading
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

export default function Agenda({ navigation }) {
    const [loading, setLoading] = useState(false);
    // estado com a localização do usuário
    const [coordinates, setCoordinates] = useState({
        latitude: -23.577003,
        longitude: -46.618896
    });

    return (
        <View style={styles.container}>

            {/* Main page content */}
                {/* condicional para caso esteja carregando, mostrar o loading, caso contrário, mostrar o mapa */}
                {/* vamos buscar a localização do usuário usando o hook useEffect */}
                { loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <MapView

                        // recebe objeto  como param
                        // latitudeDelta e longitudeDelta são props para definir o zoom do mapa
                        initialRegion={{
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                            latitudeDelta: 0.0068,
                            longitudeDelta: 0.0068,
                        }}
                        style={styles.map}
                    >
                    </MapView>
                )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
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
        ...StyleSheet.absoluteFillObject
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