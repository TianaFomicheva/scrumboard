import React from 'react'
import CategoryColumn from './CategoryColumn'



function TodoList() {
    const categoryNames = ['Бэклог', 'Надо сделать', 'В работе', 'Проверка', 'Сделано']


    return (
        <div>
            <div className="header">Scrum</div>
            <div className="content">
                {categoryNames.map((categoryName, index) => <CategoryColumn key={index} categoryId={index} title={categoryName} />)}
            </div>
        </div>
    )
}


export default TodoList
