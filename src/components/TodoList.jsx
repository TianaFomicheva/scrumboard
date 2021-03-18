import React from 'react'
import CategoryColumn from './CategoryColumn'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { setTasks } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'
// import {addTask} from '../redux/actions/actions'



function TodoList() {
    const dispatch = useDispatch()
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']
    React.useEffect(() => {

        dispatch(setTasks())
    }, [])
    const [filtered, setFiltered] = React.useState(false)
    const todos = useSelector(tasks => tasks.items)

    const items = (todos && todos.length > 0) ? todos : []
    const handleFiltered = (e, filter) => {
        e.preventDefault()
        setFiltered(filter)

    }

    const updateTaskColumn = () => {
       
    }



    const finalItems = filtered ? items.filter(it => it.text.indexOf(filtered) !== -1) : items

    return (
        <div>
            <Filter onFiltered={handleFiltered} />
            <div className="content">

                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} updateTaskColumn={updateTaskColumn} todos={(finalItems.filter(t => t.categoryId == index))} count={(finalItems.filter(t => t.categoryId == index)).length} />)}
            </div>
        </div>
    )
}


export default TodoList
