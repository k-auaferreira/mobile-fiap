// Importação dos componentes básicos do Reavt Native
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Componente de texto
const AppText : React.FC<{ children : React.ReactNode }> = ({children}) => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

// Componente principal da aplicação

const App : React.FC = () => {
  return (
    // View: Container principal da aplicação
    <View style={styles.container}>
      {/* Pode fazer comentário aqui */}
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas ante non mattis tincidunt.
        Phasellus suscipit sapien ut lacus vulputate suscipit. Donec pretium est eget erat commodo finibus.</Text>
    </View>
  );
}

// É a forma recomendada de utilizar o componente AppText
const styles = StyleSheet.create({
  container: {
    top: 50, // Posiciona 50px do topo da tela
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    padding: 16, // Espaçamento interno
  },
  text: {
    backgroundColor: 'yellow',
    fontSize: 16,
    lineHeight: 24,
    color: '#F00',
  },
});

export default App;