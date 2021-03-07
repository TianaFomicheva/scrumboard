import React from 'react'
import { TextField } from '@rmwc/textfield'
import {  useDispatch } from 'react-redux';
import {editTask} from '../redux/actions/actions'
import PropTypes from 'prop-types'

function EditItem({id, visibleEdit, categoryId}) {
    const dispatch = useDispatch()
    const [text, setText] = React.useState('')
    const checkKeyDown = (e) => {
        if (e.code === 'Enter') 
        {e.preventDefault();
            handleEdit(e)            
        }
        
      }
      const handleEdit = (e) => {       
        e.preventDefault()
        const obj ={
            text,
            categoryId,
            id
        }   
        dispatch(editTask(obj))     
        setText('');
        

    }
    const handleText = (e) => {
        setText(e.target.value)
    }

    return (
        <form className="add-form" onSubmit={handleEdit} onKeyDown={(e) => checkKeyDown(e)}>
            
            {visibleEdit &&
                (<div><TextField  value={text} onChange={handleText} /> 
           <button type="submit">Сохранить</button></div>)}


        </form>
    )
}


EditItem.propTypes = {
    visibleEdit: PropTypes.bool,
    id: PropTypes.number,
    categoryId: PropTypes.number,

};

export default EditItem
