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

    const tasks = useSelector(tasks =>  tasks)
    console.log(filtered)
    const [filterTodos, setFilterTodos] = React.useState(tasks.items)

    const handleFiltered = (e, filter) => {
        e.preventDefault()
        const filt = mapStateToProps(tasks, filter)
        setFilterTodos(filt['filtered'])
     
     

    }
console.log(filterTodos)
    const updateTaskColumn = () => {
       
    }




    return (
        <div>
            <Filter onFiltered={handleFiltered} />
            <div className="content">

                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} updateTaskColumn={updateTaskColumn} todos={(filterTodos.filter(t => t.categoryId == index))} count={(filterTodos.filter(t => t.categoryId == index)).length} />)}
            </div>
        </div>
    )
}
function mapStateToProps(state, filter) {
   const isFilter= (typeof(filter) !== 'object'|| Object.keys(filter).length > 0) ? filter : false   
    return {filtered: isFilter ? state.items.filter((it) => it['text'].indexOf(filter) !== -1) : state.items}


    }

TodoList.propTypes = {
    filtered: PropTypes.array,
}
export default connect(mapStateToProps, null)(TodoList)

