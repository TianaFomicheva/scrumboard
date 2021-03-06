import React from 'react'
import CategoryColumn from './CategoryColumn'
import { useSelector} from 'react-redux';




function TodoList() {
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']

    const initialState = localStorage.getItem('state') 
    ? JSON.parse(localStorage.getItem('state'))
    : []


  const [todos, setTodos] = React.useState(initialState)
  const items = useSelector(tasks=> tasks.items)
  console.log(items)

  console.log(todos)
    return (
        <div>
            <div className="header">Scrum</div>
            <div className="content">
                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} todos={(items.filter(t=>t.categoryId == index))} setTodos={setTodos} />)}
            </div>
        </div>
    )
}


export default TodoList
