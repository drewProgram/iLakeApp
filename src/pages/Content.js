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
    Dimensions,
    Alert
} from 'react-native';

// meus imports
import api from '../services/api';
import Cni from '../assets/cni.mp4';
import grafico from '../assets/grafico.png';

export default function Content({ navigation }) {
    const [modalSummaryState, setModalSummaryState] = useState({ modalVisible: false });
    const [modalGraphicState, setModalGraphicState] = useState({ modalVisible: false });

    // const [state, setState] = useState({ paused: true });
    // const [postion, setPosition] = useState({ start: null, end: null });

    function setModalSummaryVisible(visible) {
        setModalSummaryState({ modalVisible: visible });
    }

    function setModalGraphicVisible(visible) {
        setModalGraphicState({ modalVisible: visible });
    }

    function goChatbot() {
        navigation.navigate('Chatbot');
    }

    return (
        <View style={styles.container}>

            {/* Summary */}
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalSummaryState.modalVisible}
            >
                <View style={styles.container}>
                    <View>
                        <View>
                            <Text style={{fontSize: 20}}>Resumo da palestra</Text>
                            <View>
                                <Text style={styles.modalText}>Representar a indústria Nacional estimular as empresas de pequeno médio e grande porte a serem mais produtivas e competitivas setor produtivo forte gera crescimento na economia mais empregos e renda melhor qualidade de vida para todos os brasileiros é para que isso aconteça que a Confederação Nacional da Indústria trabalha desenvolve estudos pesquisas e participa de debates e decisões importantes para o país que faz mais de olho no futuro incentivo a Inovação e a pesquisa apoia a educação básica profissional e executiva a 81 anos trabalhando pelo futuro da Indústria.</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{fontSize: 20}}>Seu resumo em outras línguas</Text>
                            <View>
                                <Text style={styles.modalText}>Representar a indústria nacional estimular como empresas de pequeño medio y grande porte a serem mais produtivas y competitivas setor produtivo forte gera crescimento na economia mais empregos e renda melhor qualidade de vida para todos los brasileiros es para que esto ocurra en la Confederação Nacional da Indústria trabalha desenvolver estudos pesquisas e participar de debates y decisiones importantes para el país que faz mais de olho no futuro incentivo a Inovação ea pesquisa apoia a educação básica.</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setModalSummaryVisible(!modalSummaryState.modalVisible);
                            }}>
                            <Text style={styles.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Graphic */}
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalGraphicState.modalVisible}
            >
                <View style={styles.container}>
                    <View>
                        <Image
                        style = {{width: 350, height: 350}}
                            source={grafico}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setModalGraphicVisible(!modalGraphicState.modalVisible);
                            }}>
                            <Text style={styles.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Main page content */}
            <ScrollView style={styles.scrollView}>

                {/* Video Player */}
                <View style={{ height: 245, marginBottom: 50}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#6e2969' }}>CNI - Há 81 anos trabalhando pelo futuro da indústria</Text>
                    <Video
                        source={Cni}
                        ref={(ref) => {
                            player = ref
                        }}
                        style={styles.video}
                        paused={true}
                        controls={true}
                        resizeMode="contain"
                    />
                </View >

                {/* Modal buttons */}
                <View>
                    <TouchableOpacity onPress={() => {
                        setModalSummaryState(true);
                    }} style={styles.button}><Text style={styles.buttonText}>Resumo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={goChatbot}>
                        <Text style={styles.buttonText}>Chatbot</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setModalGraphicState(true);
                    }} style={styles.button}><Text style={styles.buttonText}>Frequência de palavras</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    video: {
        height: 250,
        position: 'relative',
    },
    modalText: {
        fontSize: 15
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