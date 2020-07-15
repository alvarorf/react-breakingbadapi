import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = () => {
    const [text, setText] =useState('')

    return (
        <section className='search'>
            <form>
                <input 
                type="text" 
                className='form-control' 
                placeholder='Search characters'
                value={text}
                onChange={() => setText(e.target.value)}
                autoFocus
                />

            </form>
        </section>
    )
}

export default Search
