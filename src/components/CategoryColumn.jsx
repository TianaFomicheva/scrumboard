import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem,  AddForm} from './index'






    

function CategoryColumn({title, categoryId, todos,count }) {
  


    return (
        <div>
            <div className="category-title"> {title} - {count}</div>
            <ul>
              {todos && todos.map((todo)=> <TodoItem key={todo.id} id={todo.id} text={todo.text} /> )}

            </ul>

            <AddForm categoryId={categoryId} />

        </div>
    )
}
CategoryColumn.propTypes = {
   title: PropTypes.string,
   categoryId: PropTypes.number,
   todos: PropTypes.array,
   onAddTask: PropTypes.func,
   count: PropTypes.number,

    
  };
  
  CategoryColumn.defaultProps = {
    title: '---',
    categoryId: null,
    
  };
  

export default CategoryColumn
