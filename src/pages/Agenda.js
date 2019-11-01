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

// MY IMPORTS
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import CalendarPicker from 'react-native-calendar-picker';

export default function Agenda({ navigation }) {
    // STATES
    const [loading, setLoading] = useState(true);
    // estado com a localização do usuário
    const [coordinates, setCoordinates] = useState({});
    const [calendar, setCalendar] = useState({
        selectedStartDate: null,
        selectedEndDate: null
    });

    // VARS 
    const { selectedStartDate, selectedEndDate } = calendar;
    const minDate = new Date(); // Today
    const maxDate = new Date(2017, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    useEffect(() => {
        // recebe 3 params, sendo o primeiro o que fazer quando tiver sucesso
        Geolocation.getCurrentPosition(({ coords }) => {
            setCoordinates(coords);
            setLoading(false);
        });
    }, []);

    function onDateChange(date, type) {
        if (type === 'END_DATE') {
            setCalendar({
                selectedEndDate: date,
            });
        } else {
            setCalendar({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Main page content */}
                {/* condicional para caso esteja carregando, mostrar o loading, caso contrário, mostrar o mapa */}
                {/* vamos buscar a localização do usuário usando o hook useEffect */}
                <View>
                    <Text style={styles.text}>Agenda do evento</Text>
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={true}
                        minDate={minDate}
                        maxDate={maxDate}
                        todayBackgroundColor="#f2e6ff"
                        selectedDayColor="#7300e6"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={onDateChange}
                    />

                    <View>
                        <Text>SELECTED START DATE:{startDate}</Text>
                        <Text>SELECTED END DATE:{endDate}</Text>
                    </View>
                    <Text style={styles.text}>O que tem por perto?</Text>
                </View>
                <View style={{ height: 250 }}>
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