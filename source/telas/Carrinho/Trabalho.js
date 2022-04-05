import React from "react";
import Texto from "../../components/Texto";
import { View, Image,StyleSheet } from "react-native";

export default function Trabalho({ item: { id, check}}) {
        return <>
                <View style={estilos.item} key={id}>
                        <Texto style={estilos.nome} >{id}</Texto>
                        <Image style={estilos.check} source={check} />
                </View>
               
        </>;
}

const estilos = StyleSheet.create({
        item: {
                backgroundColor: '#FFDAB9',
                border: '1px solid #000',
                borderRadius: 5,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#ececec',
                margin: 5,
                alignItems: 'center',
        },
        nome: {                
                fontSize: 18,
                color: '#464646',
                marginLeft: 15,
                lineHeight: 25
        },
        check: {
                width: 20,
                height: 20,
                marginLeft: 15,
                position: 'absolute',
                right: '5%',
        }
})
