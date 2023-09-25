import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import estilos from './estilo';
import { pegarRepositoriosDoUsuario } from '../../services/requisicoes/repositorios'
import { pegarRepositoriosDoUsuarioExterno } from '../../services/requisicoesExternas/repositoriosExternos' 

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();
    console.log(route.params);

   function dataFormatada(dataCriacao){
        let data = new Date(dataCriacao);
        let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
        return dataFormatada;
   }

    useEffect(() => {
        async function recebeRepositorios(){
            if(route.params.usuarioExterno){
                const resultado = await pegarRepositoriosDoUsuarioExterno(route.params.nome);
                setRepo(resultado);
            }
            else {
                const resultado = await pegarRepositoriosDoUsuario(route.params.id);
                setRepo(resultado);
            }
        }
        recebeRepositorios();
    }, [estaNaTela])

    return (
        <View style={estilos.container}>
            
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio', { id: route.params.id })}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>

            <FlatList
                    data={repo}
                    style={{ width: '100%' }}
                    keyExtractor={repo => repo.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={estilos.repositorio}
                            onPress={() => navigation.navigate('InfoRepositorio', {item})}
                        >
                            <Text style={estilos.repositorioNome}>{item.name}</Text>
                            <Text style={estilos.repositorioData}>
                                Atualizado em {route.params.usuarioExterno 
                                                        ? dataFormatada(item.created_at)
                                                        : item.data
                                                        }
                            </Text>
                        </TouchableOpacity>
                    )}
                />
        </View>
    );
}
