import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = props => {
    return (
        <img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block'}}
        alt='Loading...'/>
    )
}

Spinner.propTypes = {

}

export default Spinner
