import React from 'react'
import { TextField } from '@rmwc/textfield'
import Button from './Button'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions/tasks'
import { filterTasks } from '../redux/actions/tasks'


function AddForm({ categoryId }) {
    const dispatch = useDispatch()
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const toggleVisibility = (e) => {
        e.preventDefault()
        setVisiblePopup(!visiblePopup)
    }

    const [text, setText] = React.useState('')
    const checkKeyDown = (e) => {
        if (e.code === 'Enter') {
            e.preventDefault()
            handleSubmit(e)
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            text,
            categoryId
        }
        dispatch(addTask(obj))
        setText('')
        toggleVisibility(e)
        dispatch(filterTasks(''))
    }


    const handleText = (e) => {
        setText(e.target.value)
    }



    return (
        <form className="add-form" onSubmit={handleSubmit} onKeyDown={(e) => checkKeyDown(e)}>
            <Button onClick={toggleVisibility} />
            {visiblePopup &&
                (<div><TextField value={text} onChange={handleText} />
                    <button className="button" type="submit">Добавить</button></div>)}


        </form>
    )
}
AddForm.propTypes = {
    onSubmit: PropTypes.func,
    categoryId: PropTypes.number,


}
export default AddForm