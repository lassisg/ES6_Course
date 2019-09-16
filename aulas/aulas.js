// Webpack --------------------------------------------------------------------
// import { soma, sub, mult } from './funcoes';
// console.log(soma(1, 2));

// import * as funcoes from '../funcoes';
// console.log(funcoes);
// console.log(funcoes.soma(1, 2));
// ----------------------------------------------------------------------------

// Object Short Syntax --------------------------------------------------------
// const nome = 'Diego';
// const idade = 23;

// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     empresa: 'Rocketseat'
// }

// console.log(usuario);

// const usuario1 = {
//     nome,
//     idade,
//     empresa: 'Rocketseat'
// }

// console.log(usuario1);
// ----------------------------------------------------------------------------

// Template lierals -----------------------------------------------------------
// const nome = 'Diego';
// const idade = 23;

// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
// ----------------------------------------------------------------------------

// REST/SPREAD ----------------------------------------------------------------
// RSET -----------------------------------------------------------------------
// const arr = [1, 2, 3, 4];
// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function soma(...params) {
//     return params;
//     return params.reduce((total, next) => total + next);
// }
// function soma(a, b, ...params) {
//     return params;
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9));

// SPREAD ---------------------------------------------------------------------
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const usuario1 = {
//     nome: 'Diego',
//     idade: 23,
//     empresa: 'Rocketseat'
// }
// const usuario2 = {
//     ...usuario1,
//     nome: 'Leandro'
// }

// console.log(usuario1);
// console.log(usuario2);

// ----------------------------------------------------------------------------

// Desestruturação ------------------------------------------------------------
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: "SC"
//     }
// }

// Exibe objeto
// console.log(usuario);

// Exibe dados do objeto
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// Exibe dados do objeto, com desestruturação
// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome, idade, cidade);

// Exibe dados do objeto, com desestruturação, na função
// function mostraUsuario(usuario) {
//     console.log(usuario.nome);
// }
// function mostraUsuario({ nome }) {
//     console.log(nome);
// }
// function mostraUsuario({ nome, idade, endereco: { cidade } }) {
//     console.log(nome, idade, cidade);
// }

// mostraUsuario(usuario);
// ----------------------------------------------------------------------------



// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'Diego';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();

// import axios from 'axios';

// class Api {
//     static async getUserInfo(userName) {
//         try {
//             const response = await axios.get(`http://api.github.com/users/${userName}`);
//             console.log(response);
//         } catch (err) {
//             console.warn('Erro na API.');
//         }
//     }
// }

// Api.getUserInfo('diego3g');
// Api.getUserInfo('diego3glskvnlfskv');

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// async function executaPromise() {
//     const response = await minhaPromise();
//     console.log(response);
// }
// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }
// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }
// executaPromise();

// minhaPromise()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });