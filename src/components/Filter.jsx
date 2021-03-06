import React from 'react'
import { TextField } from '@rmwc/textfield'
import PropTypes from 'prop-types'

function Filter({ onFiltered, clearFiltered }) {

    const [textFilter, setTextFilter] = React.useState('')

    const checkKeyDown = (e) => {
        if (e.code === 'Enter') {
            e.preventDefault()
            onFilter(e)
        }

    }
    const onFilter = (e) => {
        e.preventDefault()
        onFiltered(textFilter)
    }
    const clearFilter = (e) => {
        e.preventDefault()
        setTextFilter('')
        clearFiltered()
    }
    function handleText(e) {
        return setTextFilter(e.target.value)
    }

    return (
        <div className="container">
            <form className="filter-form" onSubmit={onFilter} onKeyDown={(e) => checkKeyDown(e)}>
                <div className="filter"><TextField value={textFilter} onChange={handleText} />
                    <button className="button" type="submit" >Фильтр</button>
                    <button className="button" onClick={clearFilter} >Сбросить</button>
                </div>
            </form>
        </div>
    )
}
Filter.propTypes = {
    onFiltered: PropTypes.func,
    clearFiltered: PropTypes.func,
}
export default Filter