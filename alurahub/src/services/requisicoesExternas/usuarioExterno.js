import apiGitHub from '../apiGitHub';

export async function buscaUsuarioExterno(nomeUsuarioExterno) {
    try {
        const resultado = await apiGitHub.get(`/users/${nomeUsuarioExterno}`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return {}
    }
}