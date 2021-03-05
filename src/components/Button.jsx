import React from 'react'
import PropTypes from 'prop-types'

function Button({onClick}) {

    
    return (
        <button  onClick = {onClick} >
            +
        </button>
    )
}
Button.propTypes = {
    onClick: PropTypes.func,
     
   };
   
   
export default Button
