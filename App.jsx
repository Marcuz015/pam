import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Empresa from './empresa';

export default function App() {
  
const [dados, setEmpresas] = useState([]);

async function getDados(url = ''){
  const response = await fetch(url,{
    method: "GET",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers:{
      "content-Type":"apllication/json"
    }
  });
  return response.json()
}

useEffect(() => {
  getDados('http://localhost:3000/empresa').then((listaDeEmpresa) =>{
    console.log(listaDeEmpresa);
    setEmpresas(listaDeEmpresa);
  });
},[])

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados empresas</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={styles.lista}>
        <FlatList
        data={dados}
        renderItem={({item}) =>{
          return(
            <Empresa 
              nome={item.Nome}
              valorMercado={item.ValorDeMercado}
            />
          )
        }}
        />
      </View>
    </View>
    </ScrollView>
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
  },
  titulo:{
    fontSize: 25,
    marginBottom: 30,
    marginTop: 50
  },
  input:{
    borderWidth: 1,
    width: 200,
    textAlign: 'center',
    borderRadius: 20
  }
});
