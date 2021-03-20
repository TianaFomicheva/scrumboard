import React from 'react'
import CategoryColumn from './CategoryColumn'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { setTasks } from '../redux/actions/tasks'
import { useDispatch, connect } from 'react-redux'
import PropTypes from 'prop-types'



function TodoList({filtered}) {
    const dispatch = useDispatch()
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']
    React.useEffect(() => {

        dispatch(setTasks())
    }, [filtered])

    const todos = useSelector(tasks =>  tasks.items)
    const tasks = useSelector(tasks =>  tasks)

    
    
    const items = (todos && todos.length > 0) ? todos : []
    const handleFiltered = (e) => {
        e.preventDefault()
     mapStateToProps(tasks, 'gh')
     console.log(filtered)
     

    }

    const updateTaskColumn = () => {
       
    }




    return (
        <div>
            <Filter onFiltered={handleFiltered} />
            <div className="content">

                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} updateTaskColumn={updateTaskColumn} todos={(items.filter(t => t.categoryId == index))} count={(items.filter(t => t.categoryId == index)).length} />)}
            </div>
        </div>
    )
}
function mapStateToProps(state, filter) {
   
   const props=filter || ''
    console.log(state.items.filter((it) => it['text'].indexOf(props) !== -1))
   
    return {filtered: state.items.filter((it) => it['text'].indexOf(props) !== -1)}


    }

TodoList.propTypes = {
    filtered: PropTypes.array,
}
const Board = connect(mapStateToProps, null)(TodoList)
export default Board
// export default TodoList
