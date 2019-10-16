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
import JojoVideo from '../assets/jojo_op_1.mp4';
import grafico from '../assets/grafico.jpg';

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
                        <Text>Resumo da palestra</Text>
                        <View>
                            <Text style={styles.modalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor ut ante eleifend blandit. Aenean quis nunc egestas, suscipit tortor id, lacinia odio. Nam auctor nisl nisl, ac ornare mauris elementum ut. Nulla nisi massa, feugiat vitae dignissim a, convallis vel felis. Sed venenatis consectetur quam, nec molestie eros pellentesque ac. Donec eget tortor posuere, fringilla enim sed, maximus enim. Aliquam vel massa ac tortor pharetra convallis vitae sed lacus. Nam commodo hendrerit pretium. Vestibulum cursus turpis massa, ac placerat urna pulvinar sit amet. Suspendisse potenti. Cras ac enim ac tortor porttitor aliquam. Suspendisse at velit ut leo lobortis maximus eu vitae odio. Phasellus erat magna, feugiat vitae mauris vitae, rutrum volutpat neque. Nulla imperdiet neque quis quam tempus fringilla. Duis semper mi et lacus iaculis, auctor fermentum enim molestie.</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setModalSummaryVisible(!modalSummaryState.modalVisible);
                            }}>
                            <Text>Fechar</Text>
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
                        <Text>Gráfico</Text>
                        <Image
                            source={grafico}
                        />
                        <TouchableOpacity
                            style={styles.button}
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
                <View >
                    <TouchableOpacity onPress={() => {
                        setModalSummaryState(true);
                    }} style={styles.button}><Text style={styles.buttonText}>Resumo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={goChatbot}>
                        <Text style={styles.buttonText}>Chatbot</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setModalGraphicState(true);
                    }} style={styles.button}><Text style= {styles.buttonText}>Gráfico</Text>
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
        position: 'relative'
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