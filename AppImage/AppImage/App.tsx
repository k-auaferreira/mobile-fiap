import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Exemplo AppImage URI</Text>
      <StatusBar style="auto" />
      <Image
      source={{uri: 'https://fastly.picsum.photos/id/182/200/300.jpg?hmac=W6MnOpe7fP0LlNAyWl6rzWbjyLOM3ix2TXRcFx7vEPE'}}
      style={{width:250, height:250}}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});