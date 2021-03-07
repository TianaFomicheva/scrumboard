import React from 'react'
import PropTypes from 'prop-types'
import EditItem from './EditItem'


function TodoItem({text, id}) {
    const onUpdate = ()=>{
        
    }
    const [visibleEdit, setVisibleEdit] = React.useState(false);

    const handleVisibleEdit = (e)=>{
        e.preventDefault()
        setVisibleEdit(!visibleEdit);
    }
    return (

        <div className="task-card" onClick={onUpdate}>
            <p>{id} {text} </p><div onClick={handleVisibleEdit}>Edit</div>
            <EditItem visibleEdit={visibleEdit}/>
        </div>
    )
}
TodoItem.propTypes = {
    text: PropTypes.string,
    categoryId: PropTypes.number,
    id: PropTypes.number,
     
   };
   
   TodoItem.defaultProps = {
     text: ''
     
   };
export default TodoItem
