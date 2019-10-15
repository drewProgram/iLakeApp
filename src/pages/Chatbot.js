// useState para cirar um estado e pegar info do input
import React, { Component } from 'react';

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
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chatbot extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                    }
                }
            ]
        })
    }


    onSend(messages = []) {
        setBotState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    render() {
        return (
            <View>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1
                    }}
                />
            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5761',
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