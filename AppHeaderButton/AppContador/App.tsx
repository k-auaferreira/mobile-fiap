// AppContador.tsx
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ contador }:{ contador: number }): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{contador}</Text>
    </View>
  );
}

function contar(valorInicial = 0) {
  const [contador, setContador] = React.useState(valorInicial);
  const add = () => (setContador(n => n + 1));
  return { contador, add };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 30,
    color: '#000000',
    marginBottom: 24,
  },
});

export default function App() {

  const { contador, add } = contar();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#f8f9fa' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
            headerShown: true,
          }}
        >
          <Stack.Screen
            name="Home"
            options={{
              title: 'Home',
              headerRight: () => (
                <Button
                  onPress={add}
                  title="Contar"
                  color="#0077ff"
                />
              ),
            }}
          >
            {() => <HomeScreen contador={contador} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}