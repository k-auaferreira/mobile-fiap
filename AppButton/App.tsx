// AppButton com Toast
import React, { useState } from "react"; //ESTADO DO COMPONENTE
import { View, Text, Button, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

export default function App() {
  // Estado para controlar a mensagem de texto a ser exibida 
  const [message, setMessage] = useState("Nenhum número sorteado");

  //Função chamada quando o botão é pressionado
  const handleButtonClick = () => {

    const numeroSorteado = Math.floor(Math.random() * 10) + 1;

    // Atualiza a mensagem de texto
    setMessage(`Número sorteado: ${numeroSorteado}`);

    //Exiba o toast 
    // showToast();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sortear um número</Text>
      <Button title="Sortear" onPress={handleButtonClick} />
      <Text style={styles.text}>{message}</Text>
      <Toast /> {/* Componente necessário para exibir os toasts */}
    </View>
  );
}

// Função para exibir o toast
// const showToast = () => {
//   Toast.show({
//     type: 'success', //Tipo do toast que pode ser 'success', 'error', ou 'info', etc
//     text1: 'Ação realizada com sucesso!', //texto principal do toast
//     text2: 'Você pressionou o botão! 👋', 
//     visibilityTime: 2000, //Duração em milissegundos que o toast ficará visível
//   });
// };

//Definição dos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});