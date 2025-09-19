import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EstadosScreen from "../screens/EstadosScreen";
import DetalhesEstadoScreen from "../screens/DetalhesEstadoScreen";
import { Estado } from "../types/Estado";

export type RootStackParamList = {
    Estados: undefined;
    DetalhesEstado: { estado: Estado };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar style="auto" backgroundColor="#ed145b" />
            <Stack.Navigator
                initialRouteName="Estados"
                screenOptions={{
                    headerStyle: { backgroundColor: "#ed145b" },
                    headerTintColor: "#fff",
                    headerTitleStyle: { fontWeight: "bold" },
                }}
            >
                <Stack.Screen
                    name="Estados"
                    component={EstadosScreen}
                    options={{ title: "Estados Brasileiros" }}
                />
                <Stack.Screen
                    name="DetalhesEstado"
                    component={DetalhesEstadoScreen}
                    options={({ route }) => ({
                        title: route.params.estado.nome,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;