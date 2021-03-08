import React from 'react'
import CategoryColumn from './CategoryColumn'
import { useSelector} from 'react-redux';




function TodoList() {
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']

  const todos = useSelector(tasks=> tasks.items)

  const items = (todos && todos.length>0) ? todos : []
  const [filtered, setFiltered] = React.useState(false)
  const onFilter =()=>{
    setFiltered('hj1')
  
}
 
const finalItems = filtered ? items.filter(it=>it.text.indexOf(filtered) !== -1) : items
    return (
        <div>
            <div className="header">Scrum</div>
            <div className="content">
                <div onClick={onFilter}>Filter</div>
                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} todos={(finalItems.filter(t=>t.categoryId == index))} count={(finalItems.filter(t=>t.categoryId == index)).length}/>)}
            </div>
        </div>
    )
}


export default TodoList
