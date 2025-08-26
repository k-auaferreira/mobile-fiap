import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Importa o container de navegação e o criador de navegação em pilha
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importa as telas do aplicativo que serão usadas na navegação
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

// Define os tipos das rotas da navegação
type RootStackParamList = {
  Home: undefined; //Tela Home não recebe parametros
  Profile: undefined; //Tela Details não recebe parametros
}; 

const Stack = createStackNavigator<RootStackParamList>();

// Componente principal do aplicativo
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={(
          {
            headerStyle: { backgroundColor: '#ED145B' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }
        )}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;