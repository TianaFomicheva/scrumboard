import React from 'react'
import { TextField } from '@rmwc/textfield'
import { useDispatch } from 'react-redux'
import { editTask } from '../redux/actions/actions'
import PropTypes from 'prop-types'

function EditItem({ id, text, visibleEdit }) {
    const dispatch = useDispatch()
    const [newText, setNewText] = React.useState(text)
    const [visibleEditing, setVisibleEditing] = React.useState(true)
    const checkKeyDown = (e) => {
        if (e.code === 'Enter') {
            e.preventDefault()
            handleEdit(e)
        }

    }
    const handleEdit = (e) => {
        e.preventDefault()
        const obj = {
            text: newText,
            id
        }
        dispatch(editTask(obj))
        setNewText('')
        setVisibleEditing(false)
    }
    const handleText = (e) => {
        setNewText(e.target.value)

    }


    return (
        <form className="add-form" onSubmit={handleEdit} onKeyDown={(e) => checkKeyDown(e)}>

            {(visibleEdit && visibleEditing) &&
                (<div><TextField value={newText} onChange={handleText} />
                    <button type="submit">Сохранить</button></div>)}


        </form>
    )
}


EditItem.propTypes = {
    visibleEdit: PropTypes.bool,
    id: PropTypes.number,
    categoryId: PropTypes.number,
    text: PropTypes.string,


}

export default EditItem
