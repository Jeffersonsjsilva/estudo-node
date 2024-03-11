// const sequelize = require("sequelize"); //requirindo modulo sequelize para conexão e administração do BD

// const sequelize2 = new sequelize('testenode', 'root', '', {
//     host: "localhost",
//     dialect: 'mysql'
// });//Criando conexão com o banco de dados


// //Criando tabela no banco de dados
// const postagem = sequelize2.define('postagens', {
//     titulo:{
//         type:sequelize.STRING(100)
//     },
//     conteudo:{
//         type: sequelize.TEXT
//     },

// });
// //criando outra tabela
// const usuario = sequelize2.define('usuario',{
//     nome: {
//         type: sequelize.STRING(50)
//     },
//     sobrenome:{
//         type: sequelize.STRING(50)
//     },
//     idade: {
//         type: sequelize.INTEGER
//     },
//     email: {
//         type: sequelize.STRING(100)
//     }

// })
// //Executar a linha abaixo apenas 1vez
// // usuario.sync({force:true});
// // postagem.sync({force:true});

// //inserindo dados nas tabelas

// // postagem.create({
// //     titulo:"Promoção dia das mães",
// //     conteudo: "No mês do dia das mães todas as lojas terão 50% de desconto nos esmaltes"

// // })

// // usuario.create({
// //     nome: "Jefferson",
// //     sobrenome: "Santana",
// //     idade: "26",
// //     email: "jefferson.sjsilva@senacsp.edu.br"
// // })





// // TESTE DE CONEXÃO COM O BANCO
// /* sequelize2.authenticate().then(function(){
//     console.log("Conexão efetudada com sucesso");
// }
// ).catch(function(erro){
//     console.log(`Falha ao se conectar ${erro}`);
//  }); */

