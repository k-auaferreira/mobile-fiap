import { View, Text } from "react-native"; // Importa os componentes básicos

// Define o componente funcional Home
export const Home : React.FC = () => {
    return (
        <View
            style={{
                width: "100%", // Faz a View ocupar toda a largula da tela
                display: "flex", // Define o container como flexível
                alignItems: "center", // Centraliza os items horizontalmente
                justifyContent: "center", // Centraliza os items verticalmente
                height: "100%", // Faz a View ocupar toda a tela
            }}
        >
            <Text
                style={{
                    color: "gray", // Define a cor do texto como cinza
                    fontSize: 40, // Define o tamanho da fonte como 40
                }}
                >
                    Home {/* Texto exibido na tela */}
            </Text>
        </View>

    );
};