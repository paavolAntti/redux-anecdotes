import React from 'react'
import {addVote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
	const dispatch = useDispatch()


	const anecdotes = useSelector(({ filter, anecdotes }) => {
		return !filter
		? anecdotes 
    	: anecdotes.filter(anecdote => 
      	anecdote.content.toLowerCase().includes(filter.toLowerCase()))
	})
	const vote = (id) => {
		console.log('vote: ', id)
		dispatch(addVote(id))
	}

	const notify = (content) => {
		dispatch(setNotification(`you voted for ${content}`, 5))
	}
	return (
		<div>
			{anecdotes.map(anecdote =>
			<div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => { vote(anecdote.id); notify(anecdote.content) }}>vote</button>
				</div>
			</div>
			)}
		</div>	
	)
}

export default AnecdoteList