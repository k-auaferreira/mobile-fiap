import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RouteProps = RouteProp<RootStackParamList, "DetalhesEstado">;
type NavProp = NativeStackNavigationProp<RootStackParamList, "DetalhesEstado">;

const DetalhesEstadoScreen = () => {
    const { params } = useRoute<RouteProps>();
    const navigation = useNavigation<NavProp>();
    const { estado } = params;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={estado.bandeira} style={styles.bandeira} />
                <Text style={styles.sigla}>{estado.sigla} - {estado.nome}</Text>
                <Text style={styles.info}>Capital: {estado.capital}</Text>
                <Text style={styles.info}>Região: {estado.regiao}</Text>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.titulo}>Informações Gerais</Text>
                <Text style={styles.linha}>Área: {estado.area.toLocaleString("pt-BR")} km²</Text>
                <Text style={styles.linha}>População: {estado.populacao.toLocaleString("pt-BR")} habitantes</Text>
                <Text style={styles.linha}>Densidade: {estado.densidade} hab/km²</Text>
                <Text style={styles.linha}>PIB: {estado.pib}</Text>
                <Text style={styles.linha}>IDH: {estado.idh}</Text>
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.botaoTexto}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#f9f9f9" },
    card: {
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        elevation: 2,
        width: "100%",
    },
    bandeira: { width: 120, height: 80, resizeMode: "contain", marginBottom: 10 },
    sigla: { fontSize: 20, fontWeight: "bold", marginBottom: 6 },
    info: { fontSize: 16, color: "#444" },
    infoBox: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        width: "100%",
        marginBottom: 20,
        elevation: 2,
    },
    titulo: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    linha: { fontSize: 16, marginBottom: 4 },
    botao: {
        backgroundColor: "#ed145b",
        padding: 14,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
    },
    botaoTexto: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default DetalhesEstadoScreen;
