import React from 'react'
import CategoryColumn from './CategoryColumn'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { filterTasks } from '../redux/actions/tasks'
import { setFilter } from '../redux/actions/filter'
import { useDispatch} from 'react-redux'
import PropTypes from 'prop-types'



function TodoList() {
    const dispatch = useDispatch()
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']
    const  {filterVal} = useSelector( ({filter})  => filter)
    const [filtered, setFiltered] = React.useState(false)

React.useEffect(() => {

  }, [filterVal])

    const todos = useSelector(tasks => (tasks.tasks.items && tasks.tasks.items.length> 0) ? tasks.tasks.items : [])
    const fullTodos = useSelector(tasks => tasks)
    console.log(fullTodos)


    const handleFiltered = (filter)=>{
        setFiltered(filter)
        dispatch(setFilter(filter))
        dispatch(filterTasks(filter))
    }
    console.log(filtered)
   




    return (
        <div>
            <Filter onFiltered={handleFiltered} />
            <div className="content">

                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName}  todos={(todos.filter(t => t.categoryId == index))} count={(todos.filter(t => t.categoryId == index)).length} />)}
            </div>
        </div>
    )
}


TodoList.propTypes = {
    filtered: PropTypes.array,
}
export default TodoList

