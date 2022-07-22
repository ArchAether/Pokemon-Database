import React, { useCallback, useEffect, useState } from 'react';
import DataGrid from 'react-data-grid';

import { getPokemon } from '../graphQLQueries/pokemonQueries';

export default function TableComponent({columns}) {
    const [rows, getRows] = useState('')
    const localhost = window.location.href.includes('localhost') ? 'http://localhost:5000' : ''
    // checks for localhost

    const getPokemonList = useCallback(async () => {
        // let res = await fetch(`${localhost}/pokemon`)
        let res = await fetch(`${localhost}/graphql`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: getPokemon()})
        })
        res = await res.json()
        getRows(res.data.getPokemon)
    }, [])
    useEffect(() => {
        getPokemonList()
    }, [getPokemonList])

    return <DataGrid columns={columns} rows={rows} />;
}