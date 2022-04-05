import React from "react";

import { Image, StyleSheet } from "react-native";
import Texto from "../../components/Texto";

export default function Topo({titulo, imagem}) {
        return <>
                <Image style={styles.topo} source={imagem} />
                <Texto style={styles.tituloCarrinho}>{titulo}</Texto>
        </>;
}

const styles = StyleSheet.create({
        topo: {
                width: '100%',
                height: '30%'
        },
        tituloCarrinho: {
                position: 'absolute',
                paddingVertical: 60,
                textAlign: 'center',
                width: '100%',
                fontSize: 20,
                fontWeight: 'bold',
                lineHeight: 40,
                fontFamily: 'Montserrat_700Bold'
        },
})
