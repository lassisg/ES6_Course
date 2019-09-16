// Exercício 01
// Função delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }
// Solução
// async function umPorSegundo() {
//     await delay();
//     console.log('1s');
//     await delay();
//     console.log('2s');
//     await delay();
//     console.log('3s');
// }

// umPorSegundo();

// Exercício 02
// import axios from 'axios';
// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }
// Solução
// async function getUserFromGithub(user) {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response.data);
//     } catch (error) {
//         console.log('Usuário não existe');
//     }
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// Exercício 03
// import axios from 'axios';
// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/orgs/${repo}/repos`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }

// Solução
// class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(response.data);
//         } catch (error) {
//             console.log('Repositório não existe');
//         }
//     }
// }

// Github.getRepositories('rocketseat/blog-react-material-ui');
// Github.getRepositories('rocketseat/dslkvmskv');

// Exercício 04
// import axios from 'axios';
// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${usuario}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         });
// }

// Solução
// const buscaUsuario = async usuario => {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${usuario}`)
//         console.log(response.data);
//     } catch (error) {
//         console.log('Usuário não existe');
//     }
// }

// buscaUsuario('diego3g');