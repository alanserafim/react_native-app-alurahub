import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilo';
import { criarRepositorioDoUsuario } from '../../services/requisicoes/repositorios';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function criarRepositorio() {
        const resultado = await criarRepositorioDoUsuario(
            route.params.id, 
            nome, 
            data, 
        );
            
        if (resultado === 'sucesso') {
            Alert.alert('Sucesso!', 'Repositório criado!');
            navigation.goBack();
        } else {
            Alert.alert('Erro!', 'Erro ao criar repositório!');
        }
    
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity style={estilos.botao} onPress={criarRepositorio}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
