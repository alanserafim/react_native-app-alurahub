import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilo';

import { buscaUsuario } from '../../services/requisicoes/usuario';
import { buscaUsuarioExterno } from '../../services/requisicoesExternas/usuarioExterno'

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [nomeUsuarioExterno, setNomeUsuarioExterno] = useState('');

    const [usuario, setUsuario] = useState({});
    const [ehUsuarioExterno, setEhUsarioExterno] = useState(false)



    async function busca(){  
        const resultado = await buscaUsuario(nomeUsuario);	
        console.log(resultado); 
        setNomeUsuario('');

        if(resultado) {
            setEhUsarioExterno(false)
            setUsuario(resultado)
        } else {
            Alert.alert('Usuário não encontrado');
            setUsuario({});
        }
    }

    async function buscaExterna(){  
        const resultadoExterno = await buscaUsuarioExterno(nomeUsuarioExterno);	
        console.log(resultadoExterno); 
        setNomeUsuarioExterno('');
        
        if(resultadoExterno) {
            setEhUsarioExterno(true)
            setUsuario(resultadoExterno)
        } else {
            Alert.alert('Usuário não encontrado');
            setUsuario({});
        }
    }




    return (
        <ScrollView>
            <View style={estilos.container}>
                { 
                    usuario?.login &&
                <>
                    <View style={estilos.fundo} />
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
                    </View>
                    <Text style={estilos.textoNome}>{usuario.name}</Text>
                    <Text style={estilos.textoEmail}>{usuario.email}</Text>
                    <View style={estilos.seguidoresArea}>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                            <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                        </View>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                            <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositorios',{id: usuario.id, nome: usuario.login, usuarioExterno: ehUsuarioExterno})}>
                        <Text style={estilos.repositorios}>
                            Ver os repositórios
                        </Text>
                    </TouchableOpacity>
                </>
            }
                <TextInput
                    placeholder="Busque por um usuário interno"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}
                />
                    

                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={busca}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>

                <TextInput
                    placeholder="Busque por um usuário externo"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeUsuarioExterno}
                    onChangeText={setNomeUsuarioExterno}
                />
                    

                <TouchableOpacity 
                    style={estilos.botao2}
                    onPress={buscaExterna}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
