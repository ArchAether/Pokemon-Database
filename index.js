const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

// Sequelize
// const repository = require('./sequelize/Repository')
const repository = [
    {id: 0, name: "Bulbasaur", type1: "Grass", type2: "Poison" },
    {id: 1, name: "Ivysaur", type1: "Grass", type2: "Poison"} 
]

var { graphqlHTTP } = require('express-graphql')
var { RootQueryType, RootMutationType } = require('./graphQLSchema/RootQueryies')
const graphql = require('graphql')

const app = express()

// Routes (Express)
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/pokemon', cors(), async (req, res) => {
    //  pokemonList = await repository.pokemon.findAll()
    pokemonList = repository
    res.send(pokemonList)
})

// graphQL Route
var schema = new graphql.GraphQLSchema({ 
    query: RootQueryType,
    mutation: RootMutationType,
})

app.use('/graphql', cors(), graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 5000

// Start of the Server
/*repository.sequelize.sync()
.then(() => {
    app.listen(PORT, async () => {
        console.log(`Serving up port ${PORT}`)
    })
})
*/

app.listen(PORT, async () => {
    console.log(`Serving up port ${PORT}`)
})
