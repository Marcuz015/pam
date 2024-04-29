import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Empresa from './empresa';

const dados = [
  {id: 1, nome: 'x', valorMercado: '150'},
  {id: 2, nome: 'a', valorMercado: '250'},
  {id: 3, nome: 'c', valorMercado: '350'},
  {id: 4, nome: 'x', valorMercado: '150'},
  {id: 5, nome: 'a', valorMercado: '250'},
  {id: 6, nome: 'c', valorMercado: '350'},
  {id: 7, nome: 'x', valorMercado: '150'},
  {id: 8, nome: 'a', valorMercado: '250'},
  {id: 9, nome: 'c', valorMercado: '350'},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dados empresas</Text>
      <View style={styles.lista}>
        <FlatList
        data={dados}
        renderItem={({item}) =>{
          return(
            <Empresa nome={item.nome}
            valorMercado={item.valorMercado}
            />
          )
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista:{
    width: 400
  }
});
