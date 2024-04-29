import React from 'react';
import { View, Text, StyleSheet} from 'react-native'

export default Empresa = ({nome, valorMercado}) => {
    return(
        <View style={styles.nsei}>
            <Text style={styles.info}>{nome}</Text>
            <Text style={styles.info}>${valorMercado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nsei:{
       flexDirection: 'row',
       padding: 10,
       width: 400
    },
    info:{
        backgroundColor: '#993399',
        width: 185,
        margin: 2,
        fontSize: 18,
        paddingVertical: 10,
        paddingStart:5,
        borderRadius: 20,
        textAlign:'center',
        color: '#fff'
    }
})