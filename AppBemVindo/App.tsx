import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

//Componente principal do app
const App: React.FC = () => {
  //Declarando os estados 'name' e 'greeting' com useState
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const handleButtonPress = (): void => {
    Alert.alert('Ops!', 'Por favor, preencha o campo com seu nome.');
  };

  // Função chamada quando o botão é precionado 
  const handlePress = () => {

    // Poderiamos ter um alerta aqui
    if (name === '') {
      handleButtonPress();
      return;
    }

    if (greeting) { // Se já houver uma saudação, reseta os estatados
      setName(''); // Limpa o nome
      setGreeting(''); // Limpa a saudação 
    } else { // Se não houver saudação, cria uma nova
      setGreeting(`Olá, ${name}!`); // Cria uma nova saudação
    }
  };

  return (
    //Criamos a view com o text e com a saudação 
    <View style={styles.container}>

      {/* Aqui estamos fazendo o text */}
      <Text style={styles.text}>
        {!greeting ? 'Qual é o seu nome?' : greeting}
      </Text>

      {/* Aqui estamos fazendo o o textinput */}
      <TextInput
        style={styles.input}
        value={name} // Valor do TextInput é o estado 'name'
        onChangeText={setName} // Atualiza o estado 'name' quando o texto muda
        placeholder="Digite seu nome" // Texto placeholder
      />
      {/* Aqui estamos fazendo o o textinput */}
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
    flex: 1, //Faz o conteiner ocupar toda a alteura da tela 
    backgroundColor: '#fff', // alinha os itens verticalmente no centro 
    alignItems: 'center', // alinha os itens horizontalmente no centro
    justifyContent: 'center', // alinha os itens no centro
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: '80%', // Largura do campo de entrada, ocupando 80% da tela
    borderBottomWidth: 1, // Adiciona uma linha na parte inferior do campo de entrada
    padding: 5,  // Preenchimento dentro do campo de entrada
    marginBottom: 20, // Adiciona espaço abaixo do campo de entrada
    textAlign: 'center', // Alinha o texto digitado no centro
  },
  button: {
    backgroundColor: '#ED145B',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;