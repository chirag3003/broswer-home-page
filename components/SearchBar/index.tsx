"use client"

import React, { useState } from 'react'
import { Search as SearchIcon } from 'react-feather'

function SearchBar() {
    const [input, setInput] = useState('')
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if(input!== ""){
            window.location.href = `https://www.google.com/search?q=${input}`
        }
    }
    
    return (
        <form
            onSubmit={onSubmit}
            className="w-full flex items-center text-2xl border-1 shadow-accent shadow rounded-lg overflow-hidden"
        >
            <input
                value={input}
                onChange={(evt) => setInput(evt.target.value)}
                type="text"
                className="flex-1 p-4 border-none oultine-none bg-transparent focus:outline-none focus:border-none focus:ring-0"
            />
            <button type="submit" className="p-4">
                <SearchIcon />
            </button>
        </form>
    )
}

export default SearchBar
