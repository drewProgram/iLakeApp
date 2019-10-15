// useState para cirar um estado e pegar info do input
import React, {useState, useEffect} from 'react';

import { 
    KeyboardAvoidingView,
    TextInput,
    Text,
    Platform,
    Alert,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

// meus imports
import AsyncStorage from '@react-native-community/async-storage';
import logo from '../assets/logo.jpg';
import api from '../services/api';

// a função recebe uma propriedade navigation para poder fazer a navegação para outra página
export default function Login({ navigation }) {
    // iniciando estado com valor vazio
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user){
                navigation.navigate('Home', { user })
            }
        })
    }, []);

    // função para navegar para outra tela
    async function handleLogin() {
        if ((user == '' || pass == '') || (user == '' && pass == '')) {
            Alert.alert('Erro', 'Preencha os campos.', [{text: 'Ok'}]);
        }  
        else { 
            try {
                const response = await api.post('/user/check', { Username: user, Pass: pass });

                // data = propriedade do axios para pegar a informação da api
                const { _id } = response.data;

               await AsyncStorage.setItem('user', _id);
                
                // trocando para a página home e enviando o id como parâmetro
               navigation.navigate('Home', _id);    
            } catch (error) {
                console.error(error.message);
                Alert.alert('Erro', 'Usuário ou senha incorretos.', [{text: 'Ok'}]);
            }
        }  
           
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
            <Text style={styles.textWelcome}>Bem Vindo ao iLake!</Text>

            <Image style={styles.logo} source={ logo } />

            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            // cor do sublinhado do input
            underlineColorAndroid="#5c70ff"
            placeholder="Digite o seu usuário" 
            placeholderTextColor="#999"
            value={user}
            onChangeText={setUser}
            />

            <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="#5c70ff"
            placeholder="Digite a sua senha" 
            placeholderTextColor="#999"
            secureTextEntry={true}
            value={pass}
            onChangeText={setPass}
            />

            {/* botão para fazer login */}
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5761',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    textWelcome: {
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