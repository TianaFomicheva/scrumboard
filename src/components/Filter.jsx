import React from 'react'
import { TextField } from '@rmwc/textfield'
import PropTypes from 'prop-types'

function Filter({ onFiltered }) {

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
        onFiltered('')
    }
    function handleText(e) {
        return setTextFilter(e.target.value)
    }

    return (
        <form className="filter-form" onSubmit={onFilter} onKeyDown={(e) => checkKeyDown(e)}>
            <div className="filter"><TextField value={textFilter} onChange={handleText} />
                <button type="submit" >Фильтр</button>
                <button onClick={clearFilter} >Сбросить</button>
            </div>
        </form>
    )
}
Filter.propTypes = {
    onFiltered: PropTypes.func,
    setFiltered: PropTypes.func,


}
export default Filter