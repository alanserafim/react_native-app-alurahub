import api from "../api";


// =========================> GET <==================
export async function pegarRepositoriosDoUsuario(id){
    try {
        const resultado = await api.get(`/repos?postId=${id}`)
        return resultado.data;

    } catch (error) {
        console.log(error);
        return []
    }

}

// =========================> GET <==================
export async function pegarRepositoriosDoUsuarioPeloNome(id, nome){
    const resultado = await api.get(`/repos?postId=${postId}&name=${name}`).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    })
    return resultado;
}



// =========================> PUT <==================
export async function atualizarRepositoriosDoUsuario(postId, nome, data, id){
    try {
         await api.put(`/repos/${id}`, {
            name: nome, 
            data: data,
            postId: postId,
            id: id
        })
        return 'sucesso';

    } catch (error) {
        console.log(error);
        return 'erro'
    }

}


// =========================> POST <==================
export async function criarRepositorioDoUsuario(postId, nome, data){
    try {
         await api.post(`/repos`, {
            name: nome, 
            data: data,
            postId: postId,
        })
        return 'sucesso';

    } catch (error) {
        console.log(error);
        return 'erro'
    }

}

// =========================> DELETE <==================
export async function deletarRepositorioDoUsuario(id){
    try {
         await api.delete(`/repos/${id}`)
        return 'sucesso';

    } catch (error) {
        console.log(error);
        return 'erro'
    }

}