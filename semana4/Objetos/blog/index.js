const containerDePosts = document.getElementById("container-de-posts")
const tituloPost = document.getElementById("titulo-post")
const autor = document.getElementById("autor-post")
const conteudoPostagem = document.getElementById("conteudo-post")


function criarPost() {
    criarPostagem()
}

function criarPostagem() {
    const conteudo = {
        titulo: tituloPost.value, 
        nomeDoAutor: autor.value,
        conteudoDoPost: conteudoPostagem.value,
    }
    console.log(tituloPost.value)
    containerDePosts.innerHTML += `<div><h2>${conteudo.titulo}</h2><p>${conteudo.nomeDoAutor}</p><p>${conteudo.conteudoDoPost}</p></div>`
}

