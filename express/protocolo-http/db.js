const sequelize = require('sequelize') //requirindo modulo sequelize para conexão e administração do BD

const sequelize2 = new sequelize('postapp', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    sequelize: sequelize,
    sequelize2: sequelize2
}

