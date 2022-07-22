require('dotenv').config()
const path = require('path')
const {Sequelize, Model, DataTypes} = require('sequelize')

const db_host = process.env.db_host
const db_user = process.env.db_user
const db_password = process.env.db_password
const database = process.env.database

const sequelize = new Sequelize(database, db_user, db_password, {
    host: db_host,
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const repository = {
    pokemon: require(path.join(__dirname, './sequelizeModels/pokemonModel'))(sequelize, DataTypes)
}

Object.keys(repository).forEach((modelName) => {
    if ('associate' in repository[modelName]) {
        repository[modelName].associate(repository);
    }
});


repository.sequelize = sequelize
module.exports = repository