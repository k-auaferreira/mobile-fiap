import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

// Interface para definir o tipo dos dados
interface ListItem {
  id: number;
  name: string;
}

export default function App() {
  // Dados de exemplo para FlatList
  const data: ListItem[] = [
    { id: 1, name: 'Primeiro Item' },
    { id: 2, name: 'Segundo Item' },
    { id: 3, name: 'Terceiro Item' },
    { id: 4, name: 'Quarto Item' },
    { id: 5, name: 'Quinto Item' },
    { id: 6, name: 'Sexto Item' },
    { id: 7, name: 'Sétimo Item' },
    { id: 8, name: 'Oitavo Item' },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Lista de Itens</Text>
      <FlatList
        data={data} // Definindo a fonte de dados
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item.name}</Text>
          </View>
        )} // Renderização de cada item da FlatList
        showsVerticalScrollIndicator={false} // Remove a barra de rolagem
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  row: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Light border color
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 8,
  },
  rowText: {
    fontSize: 16,
    color: '#333', // Dark text color
  },
});

