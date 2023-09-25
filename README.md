<h4 align="center"> 
	AluraHub 
</h4>

<p align="center">
  <a href="#information_source-o-que-é-o-ficando-online">O que é o AluraHub?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: O que é o AluraHub?

O AluraHub é uma aplicação feita em React Native que permite salvar um perfil com informações como nome da pessoa e uma foto, e possibilita consultar um repositório que armazena dados.

Como ele funciona? O app consome uma API externa, no caso, a API pública do Github ou uma fake API com json-server.

Esse projeto é utilizado no curso 4 da formação base de React Native da plataforma da Alura.


<h1 align="center">
    <img alt="Demonstracao" title="Demonstracao" src=".images/ficando-online-newdesign.gif" width="400px" />
</h1>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- [Expo][expo]

## :information_source: Como usar

Para copiar e executar essa aplicação, você precisa de três pré-requisitos: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.

No terminal, digite os comandos a seguir:

### Baixar e instalar o projeto

```bash
# Clonar esse repositório
$ git clone https://github.com/alanserafim/react_native-app-alurahub.git

# Vá para o ropositório
$ cd AluraHub

# Instale as dependências
$ npm install

```

### Executar o Mobile

```bash
# Execute em outro terminal (dentro da pasta AluraHub)
$ npx expo start


# Para consultas dos usuários internos
# Execute em outro terminal (dentro da pasta db)
$ json-server --watch db.json --host <ip adress>

```
[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/


[Figma do projeto](https://www.figma.com/file/xEHiFcNLsIEKdostk64RRZ/Ficando-Online---Design?type=design&node-id=0-1&mode=design&t=s8q8ScfE2KziHJCY-0)

## Conceitos Abordados

| N. | Conceito trabalhado |
|--- |---
| 1 | Web API, biblioteca json-server, isomnia.
| 2 | Blioteca Axios, Requisicões.
| 3 | Requisições GET e PUT.
| 4 | Requisições POST e DELETE, e uso da API pública do GitHub.

## Comandos

```bash
json-server --watch db.json --host <ip adress>

```