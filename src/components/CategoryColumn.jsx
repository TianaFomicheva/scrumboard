
import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem, AddForm } from './index'
import { useDrop } from 'react-dnd'
import constants from '../constants.js'
import { editTaskCategory } from '../redux/actions/tasks'
import { useDispatch } from 'react-redux'



function CategoryColumn({ title, categoryId, todos, count }) {

  const dispatch = useDispatch()

  const [, drop] = useDrop(
    () => ({
      accept: constants.CARD,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
      drop: (monitor) => {
        const obj = {
          id: monitor.itemId,
          text: monitor.itemText,
          categoryId
        }
        dispatch(editTaskCategory(obj))
      }
    }),
    []
  )
  return (
    <div ref={drop} className="category__wrapper">

      <div className="category__title"> {title} - {count}</div>
      <ul className="task-item">
        {todos && todos.map((todo) =>
          <div id={'item' + todo.id} key={todo.id}><TodoItem id={todo.id} key={todo.id} text={todo.text} /></div>

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
  updateTaskColumn: PropTypes.func,



}

CategoryColumn.defaultProps = {
  title: '---',
  categoryId: null,

}

export default CategoryColumn
