
import React from 'react'
import PropTypes from 'prop-types'
// import Draggable from 'react-draggable'
import {TodoItem,  AddForm} from './index'
import Draggable from 'react-draggable'






    

function CategoryColumn({title, categoryId, todos,count }) {

  const handleDragStart =(e)=>{

    e.preventDefault()
    e.stopPropagation();
  }

  const handleDragEnd =(e)=>{
    e.preventDefault()
    const moveWidth = e.target.closest('.react-draggable').style.webkitTransform.split("(")[1].split("px")[0]
    console.log(moveWidth)
  }



    return (
        <div>
            <div className="category-title"> {title} - {count}</div>
            <ul>
              {todos && todos.map((todo)=> 
             <Draggable key={todo.id}   onDrag={handleDragStart} onStop={handleDragEnd}>
                <div ><TodoItem key={todo.id} id={todo.id} text={todo.text}/></div>
                </Draggable>
                )}

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
