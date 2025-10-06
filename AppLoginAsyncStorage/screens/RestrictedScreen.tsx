// Importa os módulos necessários do React e React Native
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// Define a interface para as propriedades da tela restrita
interface RestrictedScreenProps {
  navigation: any;
}

// Define a tela restrita do aplicativo
const RestrictedScreen: React.FC<RestrictedScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Você pode acessar esta tela!</Text>
      <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

// Exporta o componente RestrictedScreen
export default RestrictedScreen;

// Define o estilo da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    marginBottom: 10,
  },
});