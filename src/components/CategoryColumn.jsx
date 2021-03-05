import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem,  AddForm} from './index'
import { useSelector} from 'react-redux';



    

function CategoryColumn({title, categoryId}) {
  const todos = useSelector(({todos})=> todos)

    return (
        <div>
            <div className="category-title"> {title}</div>
            <ul>
              {todos && todos.map(todo=><TodoItem key={todo.text} categoryId={categoryId} text={todo.text}/>)}

            </ul>

            <AddForm categoryId={categoryId}/>

        </div>
    )
}
CategoryColumn.propTypes = {
   title: PropTypes.string,
   categoryId: PropTypes.number,
    
  };
  
  CategoryColumn.defaultProps = {
    title: '---',
    categoryId: null,
    
  };
  

export default CategoryColumn
