import React, { useCallback, useEffect, useState } from 'react';
import DataGrid from 'react-data-grid';

import { getPokemon } from '../graphQLQueries/pokemonQueries';

export default function TableComponent({columns}) {
    const [rows, setRows] = useState('')

    const getPokemonList = useCallback(async () => {
        // checks for localhost
        const localhost = window.location.href.includes('localhost') ? 'http://localhost:5000' : ''
        
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
        setRows(res.data.getPokemon)
    }, [])
    useEffect(() => {
        getPokemonList()
    }, [getPokemonList])

    // Allows you to write a custom function when setting rows
    // In the onRowsChange property, can just use setRows if 
    // Additional functionality is not required
    const newSetRows = (rows, data) => {
        setRows(rows, data)
    }

    return (
        <div>
            <DataGrid columns={columns} rows={rows} onRowsChange={newSetRows}/>
            <button id='updateBtn'
                type='button'
                className='btn'
                onClick={() => {
                    console.log(rows)
                }}
                style={{color: 'white'}}
            >
                Update
            </button>
        </div>
    )
}