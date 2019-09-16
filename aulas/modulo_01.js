// Exercício 1
// class Usuario {
//     constructor(eMail, senha) {
//         this.eMail = eMail;
//         this.senha = senha;
//     }
//     isAdmin() {
//         return this.admin === true;
//     }
// }

// class Admin extends Usuario {
//     constructor(eMail, senha) {
//         super(eMail, senha)
//         this.admin = true;
//     }
// }

// const user1 = new Usuario('email@tete.com', 'senha123');
// const adm1 = new Admin('email@tete.com', 'senha123');

// console.log(user1.isAdmin());
// console.log(adm1.isAdmin());

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];
// 2.1 Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
// const idades = usuarios.map(item => item.idade);
// console.log(idades);

// 2.2 Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
// const idades = usuarios.filter(
//     item => (item.idade > 18 && item.empresa === 'Rocketseat'));
// console.log(idades);

// 2.3 Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
// const usuario = usuarios.find(item => item.empresa === 'Google');
// console.log(usuario);

// 2.4 Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
// const oldAge = usuarios
//     .map(item => ({ ...item, idade: item.idade * 2 }))
//     .filter(item => item.idade <= 50);
// console.log(oldAge);

// Exercício 3 - Arrow Functions
// Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1
// const arr = [1, 2, 3, 4, 5];
// // arr.map(function (item) {
// //     return item + 10;
// // });
// // Solução
// arr.map(item => item + 10);
// ----------------------------------------
// 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// // function mostraIdade(usuario) {
// //     return usuario.idade;
// // }
// // Solução
// const mostraIdade = usuario => usuario.idade;

// mostraIdade(usuario);

// ----------------------------------------
// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// // function mostraUsuario(nome = 'Diego', idade = 18) {
// //     return { nome, idade };
// // }

// // Solução
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({
//     nome,
//     idade
// });
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

// ----------------------------------------
// 3.4
// const promise = function () {
//     return new Promise(function (resolve, reject) {
//         return resolve();
//     })
// }

// Solução
// const promise = () => new Promise((resolve, reject) => resolve());

// Exercício 4 - Desestruturação
// 4.1 Desestruturação simples
// const empresa = {
//     nome: "Rocketseat",
//     endereco: {
//         cidade: "Rio do Sul",
//         estado: "SC"
//     }
// };

// const {
//     nome,
//     endereco: { cidade, estado }
// } = empresa;

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// 4.2 Desestruturação em parâmetros
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// function mostraInfo({ nome, idade }) {
//     return `${nome} tem ${idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 });

// Exercício 5
// 5.1 Rest
// Defina uma variável x que recebe a primeira posição do vetor e 
// outra variável y que recebe todo restante dos dados.
// const arr = [1, 2, 3, 4, 5, 6];
// const [x, ...y] = arr;

// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]

// 5.2 Spread
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         uf: 'SC',
//         pais: 'Brasil',
//     }
// };
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
// const usuario2 = { ...usuario, nome: 'Gabriel' };
// console.log(usuario2);
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
// const usuario3 = {
//     ...usuario,
//     endereco: {
//         ...usuario.endereco,
//         cidade: 'Lontras'
//     }
// };
// console.log(usuario3);

// Exercício 6 - Template Literals
// const usuario = 'Diego';
// const idade = 23;
// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
// Solução
// console.log(`O usuário ${usuario} possui ${idade} anos`);

// Exercício 7 - Object Short Syntax
const nome = 'Diego';
const idade = 23;
const usuario = {
    nome: nome,
    idade: idade,
    cidade: 'Rio do Sul',
};
console.log(usuario);

// Solução
const usuario2 = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};
console.log(usuario2);
