import React from 'react'
import CategoryColumn from './CategoryColumn'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { filterTasks } from '../redux/actions/tasks'
import { useDispatch } from 'react-redux'

function TodoList() {
    const dispatch = useDispatch()
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']

    const todos = useSelector(tasks => (tasks.filtered) ? tasks.filtered : ((tasks.items && tasks.items.length > 0) ? tasks.items : []))
    const handleFiltered = (filter) => {
        dispatch(filterTasks(filter))
    }


    return (
        <div>
            <Filter onFiltered={handleFiltered} />
            <div className="container">
                <div className="content">

                    {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} todos={(todos.filter(t => t.categoryId == index))} count={(todos.filter(t => t.categoryId == index)).length} />)}
                </div>
            </div>
        </div>
    )
}



export default TodoList

