import React from "react";
import { FlatList, TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { estadosData } from "../data/estadosData";
import { Estado } from "../types/Estado";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Estados">;

const EstadosScreen = () => {
    const navigation = useNavigation<NavProp>();

    const renderItem = ({ item }: { item: Estado }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("DetalhesEstado", { estado: item })}
        >
            <Image source={item.bandeira} style={styles.bandeira} />
            <View>
                <Text style={styles.sigla}>{item.sigla} - {item.nome}</Text>
                <Text style={styles.info}>{item.capital}</Text>
                <Text style={styles.info}>{item.regiao}</Text>
            </View>
        </TouchableOpacity>
    );
    
    return (
        <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
            <FlatList
                data={estadosData}
                renderItem={renderItem}
                keyExtractor={(item) => item.sigla}
                contentContainerStyle={{ padding: 12 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginBottom: 10,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        elevation: 2,
    },
    bandeira: { width: 50, height: 35, marginRight: 12, resizeMode: "contain"},
    sigla: { fontSize: 16, fontWeight: "bold", marginBottom: 2 },
    info: { fontSize: 14, color: "#555" },
});

export default EstadosScreen;
