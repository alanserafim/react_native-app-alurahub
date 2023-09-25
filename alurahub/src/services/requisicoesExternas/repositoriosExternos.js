import apiGitHub from "../apiGitHub";


// =========================> GET <==================
export async function pegarRepositoriosDoUsuarioExterno(nome){
    try {
        const resultado = await apiGitHub.get(`/users/${nome}/repos`)
        return resultado.data;

    } catch (error) {
        console.log(error);
        return []
    }

}
