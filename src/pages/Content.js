// useState para cirar um estado e pegar info do input
import React, { useState } from 'react';
import Video from 'react-native-video';

import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    Alert
} from 'react-native';

// meus imports
import api from '../services/api';
import JojoVideo from '../assets/jojo_op_1.mp4';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Content({ navigation }) {
    const [modalSummaryState, setModalSummaryState] = useState({ modalVisible: false });
    // const [modalChatbotState, setModalChatbotState] = useState({ modalVisible: false });
    const [modalGraphicState, setModalGraphicState] = useState({ modalVisible: false });

    // const [state, setState] = useState({ paused: true });
    // const [postion, setPosition] = useState({ start: null, end: null });

    function setModalSummaryVisible(visible) {
        setModalSummaryState({ modalVisible: visible });
    }

    function setModalChatbotVisible(visible) {
        setModalChatbotState({ modalVisible: visible });
    }

    function setModalGraphicVisible(visible) {
        setModalGraphicState({ modalVisible: visible });
    }

    return (
        <View style={styles.container}>

            {/* Summary */}
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalSummaryState.modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View>
                        <Text>Resumo da palestra</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                setModalSummaryVisible(!modalSummaryState.modalVisible);
                            }}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/*------------------------------ Chatbot -------------------------------*/}
            {/* <Modal
                animationType="fade"
                transparent={false}
                visible={modalChatbotState.modalVisible}
            >
                <View>
                    <View>
                        <GiftedChat
                            messages={botState.messages}
                            onSend={messages => onSend(messages)}
                            user={{
                                _id: 1,
                            }}
                        />
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                setModalChatbotVisible(!modalChatbotState.modalVisible);
                            }}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal> */}

            {/* Graphic */}
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalGraphicState.modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View>
                        <Text>Gráfico</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                setModalGraphicVisible(!modalGraphicState.modalVisible);
                            }}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Main page content */}
            <ScrollView style={styles.scrollView}>

                {/* Video Player */}
                <View style={{ height: 245 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Vídeo da Palestra sobre JoJo</Text>
                    <Video
                        source={JojoVideo}
                        ref={(ref) => {
                            player = ref
                        }}
                        style={styles.video}
                        paused={true}
                        controls={true}
                        resizeMode="contain"
                    />
                </View >

                {/* Video description */}
                <View style={{ marginTop: 40 }}>
                    <Text>Jojo é um anime muito interessante e sofisticado que retrata a aventura bizarra de Jonathan Joestar e, posteriormente, seus sucessores da familía.</Text>
                </View>

                {/* Modal buttons */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                        setModalSummaryState(true);
                    }} style={styles.button}><Text>Resumo</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => {
                        setModalChatbotState(true);
                    }} style={styles.button}><Text>Chatbot</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.button} onPress={goChatbot}>
                        <Text>Chatbot</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setModalGraphicState(true);
                    }} style={styles.button}><Text>Gráfico</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
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
    text: {
        fontSize: 30,
        marginBottom: 30
    },
    scrollView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1
    },
    video: {
        height: 250,
        position: 'relative'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#4f5761',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    modalButton: {
        alignSelf: 'stretch',
        backgroundColor: '#6e2969',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 60,
        width: 60,
        alignSelf: 'stretch',
        backgroundColor: '#800080',
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
        fontSize: 16
    }
});