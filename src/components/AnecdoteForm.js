import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {notifyAboutAnecdote, setNull} from '../reducers/notificationReducer'
import {useDispatch } from 'react-redux'

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const addNew = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		dispatch(createAnecdote(content))
		dispatch(notifyAboutAnecdote(content, 'created'))
		setTimeout(() => {
			dispatch(setNull())
		}, 5000)
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addNew}>
				<div><input name='anecdote'/></div>
				<button type='submit'>create</button>
			</form>
		</div>
		
	)
}

export default AnecdoteForm