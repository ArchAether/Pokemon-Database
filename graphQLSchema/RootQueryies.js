var { GraphQLObjectType, } = require("graphql")

const {getPokemon, getPokemonById, addPokemon, updatePokemon, deletePokemon} = require('./PokemonQueries')

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        getPokemon, getPokemonById,
    })
})
const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation queries',
    fields: () => ({
        addPokemon, updatePokemon, deletePokemon,
    })
})
module.exports = { RootQueryType, RootMutationType }