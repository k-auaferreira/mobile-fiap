import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

// Exemplo de uso de Alert com personalização 
function App() {
  const showCustomAlert = () => {
    Alert.alert(
      'Alerta Personalizado',
      'Este é um alerta com botões personalizados.',
      [
        {text: 'Ação 1', onPress: () => console.log('Ação 1 Pressionada')},
        {text: 'Ação 2', onPress: () => console.log('Ação 2 Pressionada')},
        {text: 'Fechando!', style: 'cancel', onPress: () => console.log('Feshow!')},
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={ styles.button} onPress={showCustomAlert}>
        <Text style={styles.buttonText}>Aperte! </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

//Definiação estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffffff',
     fontSize: 16,
     fontWeight: 'bold',
  },  
  button: {
    backgroundColor: '#ED145B',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;