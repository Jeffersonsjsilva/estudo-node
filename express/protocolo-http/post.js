// fazendo requisição com o banco de dados
const db = require('./db');

//criando a nova tabela

const postTabela = db.sequelize2.define('postagens', {
    titulo:{
        type: db.sequelize.STRING
    },
    conteudo:{
        type: db.sequelize.TEXT
    }
});

// postTabela.sync({force:true})

//exportando minha tabela
module.exports = postTabela;






//testando sucesso ou erro
// .then(() => {
//     console.log('Tabela criada com sucesso')
// })

// .catch((error)=> {
//     console.error('Erro ao criar a tabela: ', error)
// })