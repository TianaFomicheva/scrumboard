import React from 'react'
import CategoryColumn from './CategoryColumn'
import { useDispatch} from 'react-redux';
import { setTasks } from '../redux/actions/actions';



function TodoList() {
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']
    const dispatch = useDispatch()
  const todos = localStorage.getItem('state') 
  ? JSON.parse(localStorage.getItem('state'))
  : {}
  React.useEffect(() => {
    dispatch(setTasks());
  }, []);



    return (
        <div>
            <div className="header">Scrum</div>
            <div className="content">
                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} todos={(todos.filter(t=>t.categoryId == index))}/>)}
            </div>
        </div>
    )
}


export default TodoList
