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
    }, [])

    const todos = useSelector(tasks =>  tasks.items)
    

    
    console.log(filtered)  

    const items = (todos && todos.length > 0) ? todos : []
    const handleFiltered = (e) => {
        e.preventDefault()
        mapStateToProps(items)

    }

    const updateTaskColumn = () => {
       
    }



    // const finalItems = filtered ? items.filter(it => it.text.indexOf(filtered) !== -1) : items

    return (
        <div>
            <Filter onFiltered={handleFiltered} />
            <div className="content">

                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} updateTaskColumn={updateTaskColumn} todos={(items.filter(t => t.categoryId == index))} count={(items.filter(t => t.categoryId == index)).length} />)}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
        
    filtered: state.items.filter(it => it.text.indexOf('ghk') !== -1)
    
  
})

TodoList.propTypes = {
    filtered: PropTypes.array,
}
const Board = connect(mapStateToProps, null)(TodoList)
export default Board
// export default TodoList
