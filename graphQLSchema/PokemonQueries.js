// const repository = require("../sequelize/Repository")

const repository = [
    {id: 0, name: "Bulbasaur", type1: "Grass", type2: "Poison" },
    {id: 1, name: "Ivysaur", type1: "Grass", type2: "Poison"} 
]
var {
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLObjectType,
} = require("graphql")

var pokemonType = new GraphQLObjectType({
    name: 'Pokemon',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        type1: { type: GraphQLString },
        type2: { type: GraphQLString },
    }
})

class PokemonQuery {
    getPokemon = () => {
        return ({
            type: new GraphQLList(pokemonType),
            description: 'A list of all pokemon',
            // resolve: () => repository.pokemon.findAll()
            resolve: () => { return repository }
        })
    }

    getPokemonById = () => {
        return ({
            type: pokemonType,
            description: 'Returns a Pokemon',
            args: {
                id: { type: GraphQLInt }
            },
            // resolve: (parent, args) => repository.pokemon.findByPk(args.id)
            resolve: (parent, args) => {
                for(let i = 0; i < repository.length; i++) {
                    if(repository[i].id == args.id) return repository.pokemon[i]
                }
            }
        })
    }
    // Mutate Data
    addPokemon = () => {
        return ({
            type: pokemonType,
            description: 'Adds a new Pokemon',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                type1: { type: new GraphQLNonNull(GraphQLString) },
                type2: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const pokemon = { name: args.name, type1: args.type1, type2: args.type2 }
                // return await repository.pokemon.create(pokemon)
                return repository.push(pokemon)
            }
        })
    }
    deletePokemon = () => {
        return ({
            type: pokemonType,
            description: 'Deletes a Pokemon by Id',
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLInt)
                }
            },
            resolve: async (parent, args) => {
                // return await repository.pokemon.destroy({
                //     where: { id: args.id }
                // })
                for(let i = 0; i < repository.length; i++) {
                    if(repository[i].id == args.id) repository.splice(i, 1)
                    return repository[i].id
                }
            }
        })

    }
    updatePokemon = () => {
        return ({
            type: pokemonType,
            description: 'Updates a Pokemon by Id',
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                type1: { type: new GraphQLNonNull(GraphQLString) },
                type2: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const pokemon = { name: args.name, type1: args.type1, type2: args.type2 }
                // updatedPokemon = await repository.pokemon.update(
                //     pokemon, { where: { id: args.id } })
                // return pokemon

                for(let i = 0; i < repository.length; i ++) {
                    if(repository[i].id == args.id) {
                        repository[i].name = args.name
                        repository[i].type1 = args.type1
                        repository[i].type2 = args.type2
                    }
                }
            }
        })
    }
}
const pokemon = new PokemonQuery()
const getPokemonById = pokemon.getPokemonById()
const getPokemon = pokemon.getPokemon()
const addPokemon = pokemon.addPokemon()
const updatePokemon = pokemon.updatePokemon()
const deletePokemon = pokemon.deletePokemon()

module.exports = { getPokemon, getPokemonById, addPokemon, updatePokemon, deletePokemon} 