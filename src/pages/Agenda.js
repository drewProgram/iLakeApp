// useState para cirar um estado e pegar info do input
import React, { useState } from 'react';

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

export default function Content({ navigation }) {
    const [modalSummaryState, setModalSummaryState] = useState({ modalVisible: false });

    return (
        <View style={styles.container}>

            {/* Main page content */}
            <ScrollView style={styles.scrollView}>

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