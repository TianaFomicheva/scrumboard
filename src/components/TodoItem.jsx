import React from 'react'
import PropTypes from 'prop-types'
import EditItem from './EditItem'
import { useDispatch } from 'react-redux'
import { removeTask, editTask } from '../redux/actions/tasks.js'
import constants from '../constants'
import { useDrag } from 'react-dnd'

function TodoItem({ text, id }) {

    const dispatch = useDispatch()

    const [visibleEdit, setVisibleEdit] = React.useState(false)

    const handleVisibleEdit = (e) => {

        e.preventDefault()
        setVisibleEdit(!visibleEdit)
    }
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(removeTask(id))

    }
    const [{ isDragging }, drag] = useDrag(() => ({
        type: constants.CARD,
        item: { type: constants.CARD, itemId: id, itemText: text },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            item: monitor.getItem()
        })
    }))

    const handleEditItem = obj => {
        dispatch(editTask(obj))
        setVisibleEdit(!visibleEdit)
    }


    return (
        <div ref={drag}>
            <div className="task-card" style={{
                opacity: isDragging ? 0.5 : 1
            }} >
                <p>{text} </p>
                <div className="action__field">
                    <div onClick={handleVisibleEdit} className="action__button">&#9998;</div>
                    <div onClick={handleDelete} className="action__button">&#10006;</div>
                </div>
                <EditItem visibleEdit={visibleEdit} text={text} id={id} editItem={handleEditItem} />
            </div>

        </div>)




}
TodoItem.propTypes = {
    text: PropTypes.string,
    categoryId: PropTypes.number,
    id: PropTypes.number,

}


export default TodoItem

