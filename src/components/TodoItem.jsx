import React from 'react'
import PropTypes from 'prop-types'


function TodoItem({text, categoryId}) {
    return (
        <div className="task-card">
            {categoryId} {text}
        </div>
    )
}
TodoItem.propTypes = {
    text: PropTypes.string,
    categoryId: PropTypes.number,
     
   };
   
   TodoItem.defaultProps = {
     text: ''
     
   };
export default TodoItem
