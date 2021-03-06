import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem,  AddForm} from './index'






    

function CategoryColumn({title, categoryId, todos}) {
  


    return (
        <div>
            <div className="category-title"> {title}</div>
            <ul>
              {todos && todos.map((todo)=> <TodoItem key={todo.text} categoryId={todo.categoryId} text={todo.text}/> )}

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
    
  };
  
  CategoryColumn.defaultProps = {
    title: '---',
    categoryId: null,
    
  };
  

export default CategoryColumn
