import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './MenuSearch.css'

const MenuSearch = () => {
    const [input, setInput] = useState('')
    const history = useHistory()
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/summoner/${input}`)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='menu-search-div'>
            <input className='menu-search-input' onChange={handleInput} value={input} placeholder="Find a Summoner..."></input>
            <div onClick={handleSubmit} className='menu-button-anchor'><i className='fas fa-arrow-alt-circle-right'></i></div>
        </form>
    )
}

export default MenuSearch;
