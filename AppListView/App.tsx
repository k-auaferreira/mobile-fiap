import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native';

// Interface para definir o tipo dos dados
interface ListItem {
  id: number;
  name: string;
  job: string;
  image: any; 
}

export default function App() {
  // Dados de exemplo para FlatList com imagens locais
  const data: ListItem[] = [
    { id: 1, name: 'Felipe', job: 'Engenheiro', image: require('./assets/1.jpg') },
    { id: 2, name: 'Ana', job: 'Psicólogo', image: require('./assets/2.jpg') },
    { id: 3, name: 'Ricardo', job: 'Médico', image: require('./assets/3.jpg') },
    { id: 4, name: 'Juliana', job: 'Professor', image: require('./assets/4.jpg') },
    { id: 5, name: 'Camila', job: 'Designer', image: require('./assets/5.jpg') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Contatos</Text>
      <FlatList
        data={data} // Definindo a fonte de dados
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.rowTitle}>{item.name}</Text>
              <Text style={styles.rowJob}>{item.job}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false} // Remove a barra de rolagem
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column', // Alinha nome e cargo verticalmente
  },
  rowTitle: {
    fontSize: 20,
    color: '#333',
  },
  rowJob: {
    fontSize: 16,
    color: '#666',
  },
});