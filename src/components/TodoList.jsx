import React from 'react'
import CategoryColumn from './CategoryColumn'
import { useSelector} from 'react-redux';




function TodoList() {
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']

  const todos = useSelector(tasks=> tasks.items)

  const items = (todos.length>0) ? todos : []



  console.log(todos)
    return (
        <div>
            <div className="header">Scrum</div>
            <div className="content">
                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} todos={(items.filter(t=>t.categoryId == index))} />)}
            </div>
        </div>
    )
}


export default TodoList
