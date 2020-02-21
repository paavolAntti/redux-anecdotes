import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const AnecdoteForm = (props) => {
	

	const addNew = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		props.createAnecdote(content)
		props.setNotification(`${content} created`, 5)
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


const ConnectedAnecdoteForm = connect(null, { createAnecdote, setNotification })(AnecdoteForm)

export default ConnectedAnecdoteForm