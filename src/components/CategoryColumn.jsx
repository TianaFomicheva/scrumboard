
import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem,  AddForm} from './index'

/* Оставляю рабочее поведение Draggable
import Draggable from 'react-draggable'
import {  useDispatch} from 'react-redux'
import {addTask} from '../redux/actions/actions'
import {removeTask} from '../redux/actions/actions'

*/




    

function CategoryColumn({title, categoryId, todos,count }) {
  /* рабочие методы Druggable
  const dispatch = useDispatch()

  const handleDragStart =(e)=>{
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragEnd =(e)=>{
    e.preventDefault()
    const id = +e.target.closest('.react-draggable').getAttribute('data-id')   
    const text = e.target.closest('.react-draggable').getAttribute('rel')
    const moveWidth = e.target.closest('.react-draggable').style.webkitTransform.split("(")[1].split("px")[0]
    const columnWidth  = document.documentElement.clientWidth / 5
    const newCategoryId = categoryId + Math.round(moveWidth / columnWidth)
      
    dispatch(removeTask(id)) 
    const obj = {
      text,
      categoryId: newCategoryId
    }       
    dispatch(addTask(obj)) 
  }


*/
    return (
        <div>
            <div className="category-title"> {title} - {count}</div>
            <ul className="task-item">
              {todos && todos.map((todo)=> 
            //  <Draggable key={todo.id}  onDrag={handleDragStart} onStop={handleDragEnd}>
                <div data-id={todo.id}  key={todo.id}  rel={todo.text}><TodoItem id={todo.id} key={todo.id}  text={todo.text}/></div>
                //  </Draggable>
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

    
  }
  
  CategoryColumn.defaultProps = {
    title: '---',
    categoryId: null,
    
  }
  
  export default CategoryColumn