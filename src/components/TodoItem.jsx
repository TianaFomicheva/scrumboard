import React from 'react'
import PropTypes from 'prop-types'
import EditItem from './EditItem'
import { useDispatch } from 'react-redux'
import { removeTask } from '../redux/actions/actions'

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
    return (

        <div className="task-card"  >
            <p>{text} </p><div onClick={handleVisibleEdit} className="action-button">&#9998;</div><div onClick={handleDelete} className="action-button">&#10006;</div>
            <EditItem visibleEdit={visibleEdit} text={text} id={id} />
        </div>
    )
}
TodoItem.propTypes = {
    text: PropTypes.string,
    categoryId: PropTypes.number,
    id: PropTypes.number,

}

TodoItem.defaultProps = {
    text: ''

}
export default TodoItem
