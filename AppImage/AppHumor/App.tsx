import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';

// Importando as imagens locais
import cansado from './assets/cansado.png';
import feliz from './assets/feliz.png';
import bravo from './assets/bravo.png';

export default class App extends React.Component {
  state = {
    imagem: null,
  };

  render() {
    const { imagem } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Selecione uma emoção</Text>

        {imagem && (
          <Image
            resizeMode="center"
            source={imagem}
            style={styles.image}
          />
        )}
        <View style={styles.separator} />
        
        <View style={styles.buttonsRow}>
          <Button
            title="Cansado"
            onPress={() => this.setState({ imagem: cansado })}
          />
          <Button
            title="Feliz"
            onPress={() => this.setState({ imagem: feliz })}
          />
          <Button
            title="Bravo"
            onPress={() => this.setState({ imagem: bravo })}
          />
        </View>

        <StatusBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  separator: {
    marginBottom: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 10,
  },
});
