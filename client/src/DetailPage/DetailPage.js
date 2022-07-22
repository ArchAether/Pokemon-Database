import React, { useCallback, useState, useEffect } from "react";

export default function DetailPage() {
    const [pokemon, getPokemon] = useState('')
    const localhost = window.location.href.includes('localhost') ? 'http://localhost:5000' : ''
    // checks for local host

    const getPokemonList = useCallback(async () => {
        let res = await fetch(`${localhost}/pokemon`)
        res = await res.json()
        getPokemon(res[0])
    }, [])
    useEffect(() => {
        getPokemonList()
    }, [getPokemonList])

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <p>
                {pokemon.name}s are {pokemon.type1} and {pokemon.type2} type!
            </p>
        </div>
    )
}