import React from 'react'
import {filterChange} from '../reducers/filterReducer'
import {useDispatch } from 'react-redux'

const Filter = () => {
	const dispatch = useDispatch()
	const handleChange = (event) => {
		event.preventDefault()
		// input-kentän arvo muuttujassa event.target.value
		const newFilter = event.target.value
		console.log('current filter: ', newFilter)
		dispatch(filterChange(newFilter))
  	}
  	const style = {
    	marginBottom: 10
  	}

  	return (
    	<div style={style}>
      		filter <input onChange={handleChange} />
    	</div>
  	)
}

export default Filter