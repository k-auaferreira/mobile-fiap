import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

// Exemplo de uso de Alert com personalização 
function App() {
  const [text1, setText1] = useState("Empresa bacana");
  const [text2, setText2] = useState("Kauã Ferreira");

  // Função chamada quando o botão é pressionado
  const handleButtonClick = () => {
    const mensagem = `${text1} - ${text2}`;
    Alert.alert(
      'Alert',
      mensagem,
      [
        { text: "OK", style: "cancel" }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>COMBINAR TEXTOS</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// Definição estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },  
  button: {
    backgroundColor: '#ED145B',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    color: 'white',
    marginVertical: 5,
  },
});

export default App;