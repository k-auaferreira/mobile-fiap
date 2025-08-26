import React from "react";
// Importa componentes básicos do React Native 
import {View, Text, Button, StyleSheet} from "react-native";
// Importa tipos para navegaçao da pilha 
import { StackScreenProps } from "@react-navigation/stack";

// Define os tipos das rotas da navegação 
type RootStackParamList = {
    Home: undefined; //Tela Home não recebe parametros
    Profile: undefined //Tela Profile não recebe parametros
};

//Define as props esperadas para a tela Home usando o tipo de navegaçao 
type ProfileScreenProps = StackScreenProps<RootStackParamList, 'Profile'>;

//Componentes funcionbais da tela home 
const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
    return(
        
        //View Centralizada
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button color="#ED145B" title="Go Back" 
                onPress={() => navigation.goBack()} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
// Exporta o componente para ser usado em outro arquivos 
export default ProfileScreen;