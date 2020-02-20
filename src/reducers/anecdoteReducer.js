
const getId = () => (100000 * Math.random()).toFixed(0)

export const addVote = (id) => {
	return {
		type: 'VOTE',
		data: {id}
	}
}

export const createAnecdote = (content) => {
	return {
		type: 'NEW',
		data: {
			content,
			id: getId(),
			votes: 0
		}
	}
}

export const initialize = (anecdotes) => {
	return {
		type: 'INIT',
		data: anecdotes
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