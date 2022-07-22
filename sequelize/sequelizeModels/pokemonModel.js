const PokemonModel = (sequelize, DataTypes) => {
    const pokemon = sequelize.define('pokemon', {
        name: {
            type: DataTypes.STRING,
        },
        type1: {
            type: DataTypes.STRING,
        },
        type2: {
            type: DataTypes.STRING,
        }
    }, { timestamps: false, })
    return pokemon
}

module.exports = PokemonModel