import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem, Button} from './index'


    

function CategoryColumn({title, categoryId}) {
  const [todos, setTodos] = React.useState([])

  const onAddTask = (id, text, categoryId)=>{
    const obj = {
      id,
      text,
      categoryId 
    }
    setTodos(obj)
  }
    return (
        <div>
            <div className="category-title"> {title}</div>
            <ul>
              {todos && todos.map(todo=><TodoItem key={todo.text} categoryId={categoryId} text={todo.text}/>)}

            </ul>
            <Button onClick={onAddTask}/>
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
