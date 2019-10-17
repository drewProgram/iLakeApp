// useState para cirar um estado e pegar info do input
import React, {useState} from 'react';

import { 
    KeyboardAvoidingView,
    TextInput,
    Text,
    Platform,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

// meus imports
import logo from '../assets/logo.jpg';
import api from '../services/api';

// a função recebe uma propriedade navigation para poder fazer a navegação para outra página
export default function Imersions({ navigation }) {

    // função para navegar para outra tela
    function goContent() {
        navigation.navigate('Content');
    }

    return(
        // view para o teclado n obstruir o input (apenas necessário para ios)
        <KeyboardAvoidingView 
        style={styles.container}
        // aplica um padding do tamanho do teclado
        behavior="padding"
        // apenas se for o sistema operacional ios
        enabled={Platform.OS == 'ios'}
        >
            <Text>PALESTRAS</Text>
           
            <TouchableOpacity onPress={goContent} style={styles.button}>
                <Text style={styles.buttonText}>CNI</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
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
    text: {
        fontSize: 30,
        marginBottom: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch', // ocupa todo o espaço possível
        marginTop: 20,
        paddingLeft: 6
    },
    logo: {
        height: 200,
        width: 200
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#6e2969',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});