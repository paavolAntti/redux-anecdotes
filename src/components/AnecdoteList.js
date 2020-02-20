import React from 'react'
import {addVote} from '../reducers/anecdoteReducer'
import {setNull, notifyAboutAnecdote} from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
	const dispatch = useDispatch()

	const anecdotes = useSelector(state => state.anecdotes)
	const filter = useSelector(state => state.filter)

	const vote = (id) => {
		console.log('vote: ', id)
		dispatch(addVote(id))
	}

	const notify = (content) => {
		console.log('voted anecdote: ', content)
		//setTimeout tähän
		dispatch(notifyAboutAnecdote(content, 'voted for'))
		setTimeout(() => {
			dispatch(setNull())
		}, 5000)
	}

	const filteredAnecdotes = (!filter)
		? anecdotes 
    	: anecdotes.filter(anecdote => 
      	anecdote.content.toLowerCase().includes(filter.toLowerCase()))
	

	return (
		<div>
			{filteredAnecdotes.map(anecdote =>
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