import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

//Importando a imagem de forma local 
import dino1 from './assets/dino1.png';
import dino2 from './assets/dino2.png';
import dino3 from './assets/dino3.png';
import noImage from './assets/noimg.png';

export default class App extends React.Component {
  state = {
    imagem: noImage
  }

  render() {
    const { imagem } = this.state
    return (
      <View style={styles.container}>
        <Image
          resizeMode='center'
          source={imagem}
          style={styles.image}
        />
        <View style={styles.separator} />
        <View>
          <Button
            title='Imagem 1'
            onPress={_ => this.setState({ imagem: dino1 })}
          />
          <View style={styles.separator} />
          <Button
            title='Imagem 2'
            onPress={_ => this.setState({ imagem: dino2 })}
          />
          <View style={styles.separator} />
          <Button
            title='Imagem 3'
            onPress={_ => this.setState({ imagem: dino3 })}
          />
        </View>
        <StatusBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  separator: {
    marginBottom: 20,
  },
});