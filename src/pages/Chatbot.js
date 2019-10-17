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


import { GiftedChat } from 'react-native-gifted-chat';
// import flask from '../services/flask';

const BOT_USER = {
  _id: 2,
  name: 'ORION',
  avatar: 'https://i.imgur.com/7k12EPD.png'
};

export default class Chatbot extends Component {

  
  state = {
    messages: [
      {
        _id: 1,
        text: `Olá! Meu nome é ORION. Pergunte-me qualquer coisa!`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };


  

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});