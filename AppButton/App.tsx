// AppButton com Toast
import React, {useState} from "react"; //ESTADO DO COMPONENTE
import {View, Text, Button, StyleSheet} from "react-native";
import Toast from "react-native-toast-message";

export default function App() {
// Estado para controlar a mensagem de texto a ser exibida 
  const [message, setMessage] = useState ("Precione o botão");

  //Função chamada quando o botão é pressionado
  const handleButtonClick = () => {

    // Atualiza a mensagem de texto
    setMessage("Botão Pressionado!");

    //Exiba o toast 
    showToast();
  };

 return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Pressione-me" onPress={handleButtonClick} />
      <Toast /> {/* Componente necessário para exibir os toasts */}
    </View>
  );
}

 // Função para exibir o toast
  const showToast = () => {
    Toast.show({
      type: 'success', //Tipo do toast que pode ser 'success', 'error', ou 'info', etc
      text1: 'Ação realizada com sucesso!', //texto principal do toast
      text2: 'Você pressionou o botão! 👋', 
      visibilityTime: 2000, //Duração em milissegundos que o toast ficará visível
    });
  };

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
  }, 
});