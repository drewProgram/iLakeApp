import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import api from '../services/api';

export default function Home({ navigation }) {
    function goPastImersion() {
        navigation.navigate('PastImersions');
    }

    function goPresentImersion() {
        navigation.navigate('PresentImersions');
    }

    function goAgenda() {
        navigation.navigate('Agenda');
    }

    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 20, fontSize: 25, color: '#6e2969'}}>Seja bem vindo, Andrew!</Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={goPastImersion} style={styles.button}>
                    <Text style={styles.buttonText}>Imersões Passadas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text onPress={goPresentImersion} style={styles.buttonText}>Imersões Atuais</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text onPress={goAgenda} style={styles.buttonText}>Agenda</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    button: {
        height: 100,
        width: 100,
        alignSelf: 'stretch',
        backgroundColor: '#6e2969',
        borderRadius: 4,
        borderColor: '#000',
        borderWidth: 0.5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }

})