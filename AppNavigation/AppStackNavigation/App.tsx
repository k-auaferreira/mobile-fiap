import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Importa o container de navegação e o criador de navegação em pilha
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importa as telas do aplicativo que serão usadas na navegação
import HomeScreen from './screens/HomeScreen';
import Detailscreen from './screens/DetailsScreen';

// Define os tipos das rotas da navegação
type RootStackParamList = {
  Home: undefined; //Tela Home não recebe parametros
  Details: undefined; //Tela Details não recebe parametros
}; 

const Stack = createStackNavigator<RootStackParamList>();

// Componente principal do aplicativo
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={Detailscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;