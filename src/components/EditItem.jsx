import React from 'react'
import { TextField } from '@rmwc/textfield'
import PropTypes from 'prop-types'

function EditItem({ id, text, visibleEdit, editItem }) {
    const [newText, setNewText] = React.useState(text)    
    const checkKeyDown = (e) => {
        if (e.code === 'Enter') {
            e.preventDefault()
            submitEdit(e)
        }

    }
    const submitEdit = (e) => {
        e.preventDefault()
        const obj = {
            text: newText,
            id
        }            
        editItem(obj)
    }
    const handleText = (e) => {
        setNewText(e.target.value)
    }


    return (
        <form className="add-form" onSubmit={submitEdit} onKeyDown={(e) => checkKeyDown(e)}>
            {visibleEdit &&
                (<div><TextField value={newText} onChange={handleText} />
                    <button className="button button__edit" type="submit">Сохранить</button>
                </div>)}
        </form>
    )
}


EditItem.propTypes = {
    visibleEdit: PropTypes.bool,
    id: PropTypes.number,
    text: PropTypes.string,
    editItem: PropTypes.func,


}

export default EditItem
