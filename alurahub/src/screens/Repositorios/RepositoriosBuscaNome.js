import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import estilos from './estilo';
import { pegarRepositoriosDoUsuarioPeloNome } from '../../services/requisicoes/repositorios'

export default function RepositoriosBuscaNome({ route, navigation }) {
const [nomeRepo, setNomeRepo] = useState('');

async function buscarRepositorioPorNome() {
        const resultado = await pegarRepositoriosDoUsuarioPeloNome(route.params.id, nomeRepo);
        setRepo(resultado);
        setNomeRepo('');
    }

return (
        <View style={estilos.container}>
                <TextInput
                    value={nomeRepo}
                    onChangeText={setNomeRepo}
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                />
                <TouchableOpacity 
                    onPress={buscarRepositorioPorNome}
                >
                    <Text>Buscar</Text>
                </TouchableOpacity>
        </View>
);
}