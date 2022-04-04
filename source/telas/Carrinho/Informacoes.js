import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";
import paper from '../../../assets/paper.jpg'
import ok from '../../../assets/ok.jpg'
import no from '../../../assets/no.png'

import tresG from '../../../assets/Itens/antena2g3g.png'
import wifii from '../../../assets/Itens/antenaWifi.png'
import modem from '../../../assets/Itens/modem.png'
import mcu from '../../../assets/Itens/nodeMcu.png'


export default function Informacoes() {
        return <>
                <Image style={styles.rodape} source={paper} />
                <Text style={styles.info}>Informações Kit IOT</Text>

                <View style={styles.cont}>
                        <Image style={styles.img} source={mcu} />
                        <Text style={styles.txtCont}>MCU</Text>
                        <Image style={styles.check} source={ok} />
                </View>  
                
                <View style={styles.cont}>
                        <Image style={styles.img} source={modem} />
                        <Text style={styles.txtCont}>Modem</Text>
                        <Image style={styles.check} source={ok} />
                </View>   

                <View style={styles.cont}>
                        <Image style={styles.img} source={wifii} />
                        <Text style={styles.txtCont}>Antena WI-FII</Text>
                        <Image style={styles.check} source={ok} />
                </View>   

                <View style={styles.cont}>
                        <Image style={styles.img} source={tresG} />
                        <Text style={styles.txtCont}>Antena 3G</Text>
                        <Image style={styles.check} source={no} />
                </View>   

        </>;
}

const styles = StyleSheet.create({
        rodape: {
                marginTop: 20,
                width: '100%',
                height: '15%'
        },
        info: {
                color: '#3E3E3E',
                marginBottom: 50,
                position: 'relative',
                marginTop: -100,
                textAlign: 'center',
                fontSize: 40,
                fontWeight: 'bold'
        },
        cont: {
                flexDirection: 'row',
                marginTop: 10,
                marginHorizontal: 20,
        },
        img: {
                width: 80,
                height: 80,
                marginRight: 30,
        },
        txtCont: {
                fontSize: 25,
                fontWeight: 'bold',
                paddingTop: 20,
        },
        check: {
                width: 32,
                height: 32,
                marginTop: 20,
                marginLeft: 30,
        },
        space: {
                margin: 20,
        }
})
