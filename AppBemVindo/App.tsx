import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//Componente principal do app
const App: React.FC = () => {

  //Declarando os estados 'name' e 'greeting' com useState
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Função chamada quando o botão é precionado 
  const handlePress = () => {
    //Poderiamos ter um alerta aqui 
    if (greeting) { //Se já houver uma saudação, reseta os estatados
      setName(''); //limpa o nome
      setGreeting(''); //limpa a saudação 
    } else { //Se não houver saudação, cria uma nova
      setGreeting(`Olá, ${name}!`); //Cria uma nova saudação
    }
  };

  return (
    //Criamos a view com o text e com a saudação 

    <View style={styles.container}>
      {/*Aqui estamos fazendo o text */}
      <Text style={styles.text}>
        {!greeting ? 'Qual é o seu nome?' : greeting}
      </Text>
      {/*Aqui estamos fazendo o o textinput */}
      <TextInput
        style={styles.input}
        value={name} //Valor do TextInput é o estado 'name'
        onChangeText={setName} //Atualiza o estado 'name' quando o texto muda
        placeholder="Digite seu nome" //Texto placeholder
      />
      {/*Aqui estamos fazendo o o textinput */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {greeting ? 'Limpar' : 'Enviar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Implementando o estilo 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    border
  }
});