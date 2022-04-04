import React from "react";

import { Image, Text,StyleSheet } from "react-native";
import topo from '../../../assets/topo.png'

export default function Topo() {
    return <>
        <Image style={styles.topo} source={topo} />
        <Text style={styles.tituloCarrinho}>Carrinho</Text>
    </>;
}

const styles = StyleSheet.create({
        topo: {
                width: '100%',
                height: '20%' 
        },
        tituloCarrinho: {
                position: 'absolute',
                paddingVertical: 60,
                textAlign: 'center',
                width: '100%',
                fontSize: 20,
                fontWeight: 'bold',
                lineHeight: 40
        },
})
