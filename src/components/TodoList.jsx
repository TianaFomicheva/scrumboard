import React from 'react'
import CategoryColumn from './CategoryColumn'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { setTasks } from '../redux/actions/tasks'
import { useDispatch, connect } from 'react-redux'




function TodoList() {
    const dispatch = useDispatch()
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']
    React.useEffect(() => {

        dispatch(setTasks())
    }, [])

    const todos = useSelector(tasks => tasks.filteredItems ? tasks.filteredItems : tasks.items)
    

    const mapStateToProps = (state, filter) => {
        return {
          filterd: state.items.filter(it => it.text.indexOf(filter) !== -1)
          
        }
      }
      

    const items = (todos && todos.length > 0) ? todos : []
    const handleFiltered = (e, filter) => {
        e.preventDefault()
        mapStateToProps(items,filter)

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

const Board = connect(mapStateToProps, null)(TodoList)
export default Board
