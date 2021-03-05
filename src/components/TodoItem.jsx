import React from 'react'
import PropTypes from 'prop-types'


function TodoItem({text}) {
    return (
        <div className="task-card">
            {text}
        </div>
    )
}
TodoItem.propTypes = {
    text: PropTypes.string
     
   };
   
   TodoItem.defaultProps = {
     text: ''
     
   };
export default TodoItem
