import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RestrictedScreen from './screens/RestrictedScreen';

// Define a interface para as propriedades da tela inicial
interface HomeScreenProps {
  navigation: any; // Define o tipo da propriedade "navigation"
}

// Define a tela inicial do aplicativo
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [loggedIn, setLoggedIn] = useState(false); // Estado que controla o login
  const [username, setUsername] = useState(''); // Estado que armazena o nome de usuário

  // Efeito colateral que verifica se o usuário já está logado ao carregar a tela
  useEffect(() => {
    // Verifica se o usuário já está logado ao carregar a tela
    AsyncStorage.getItem('username').then(value => {
      if (value) {
        setLoggedIn(true); // Define loggedIn como true se o usuário estiver logado
        setUsername(value); // Define o nome de usuário armazenado
      }
    });
    // Limpa o estado de login ao desmontar o componente
  }, []);
  
  // Função para lidar com o processo de login
    const handleLogin = async () => {
    if (username === 'Kaua') {
      // Verifica se o nome de usuário é "Kaua"
      await AsyncStorage.setItem('username', username); // Armazena o nome de usuário
      setLoggedIn(true); // Define loggedIn como true após o login bem-sucedido
      navigation.navigate('Restricted'); // Navega para a tela restrita após o login bem-sucedido
    } else {
      // Exibe um alerta se o nome de usuário não for encontrado
      Alert.alert('Ops!', 'Usuário não encontrado', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  // Função para lidar com o processo de logout
  // Remove o nome de usuário armazenado e redefine o estado de login
  const handleLogout = async () => {
    // Função para lidar com o processo de logout
    await AsyncStorage.removeItem('username'); // Remove o nome de usuário armazenado
    setLoggedIn(false); // Define loggedIn como false após o logout
  };

  // Renderiza a tela inicial com base no estado de login
  return (
    <View style={styles.container}>
      {loggedIn ? ( // Renderização condicional com base no estado de login
        <>
          <Text style={styles.welcome}>Bem-vindo, {username}!</Text>
          <Button title="Sair" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text>Login</Text>
          <TextInput
            placeholder="Nome de usuário"
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.input}
          />
          <Button title="Entrar" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restricted" component={RestrictedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: 200,
  },
  welcome: {
    marginBottom: 10,
  },
});