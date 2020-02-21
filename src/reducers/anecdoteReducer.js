import anecdoteService from '../services/anecdotes'


export const getId = () => (100000 * Math.random()).toFixed(0)

export const addVote = (id) => {
	return async dispatch => {
		const votedAnecdote = await anecdoteService.update(id)
		dispatch({
			type: 'VOTE',
			data: votedAnecdote
		})
		
	}
}

export const createAnecdote = (content) => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(content)
		dispatch({
			type: 'NEW',
			data: newAnecdote
		})
	}
}

export const initialize = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT',
		data: anecdotes
		})	
	}
}


const sortAnecdotes = (anecdotes) => {
	const sorted = anecdotes.sort((a, b) => {
			let votesA = a.votes
			let votesB = b.votes

			if (votesA > votesB) {
				return -1
			} else if (votesA < votesB) {
				return 1
			}
			return 0
		})
	return sorted
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
	  	case 'VOTE':
			const id = action.data.id
			const anecdote = state.find(a => a.id === id)
			const votedAnecdote = {
				...anecdote,
				votes: anecdote.votes + 1
			}
			const updatedState = state.map(anec => anec.id !== id ? anec : votedAnecdote)
			return sortAnecdotes(updatedState)
		case 'NEW':
			return state.concat(action.data)
		case 'INIT':
			return action.data
	  	default:
		  return state
  }
}

export default anecdoteReducer