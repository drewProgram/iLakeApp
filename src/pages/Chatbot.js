// useState para cirar um estado e pegar info do input
import React, { Component } from 'react';

import {
    View,
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
        messages: [],
      }
    
      componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Olá, executivo! Meu nome é Orion e eu irei responder a todas as suas dúvidas sobre a palestra. Oi Nebula!!',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
            {
                _id: 2,
                text: 'Testando',
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
          ],
        })
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
    
      render() {
        return (
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        )
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });