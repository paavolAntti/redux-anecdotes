
export const notifyAboutAnecdote = (anecdote, message) => {
	return {
		type: 'NOTIFY',
		data: {
			anecdote,
			message: message
		}
	}
}

export const setNull = () => {
	return {
		type: 'NULL'
	}
}

const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case 'NOTIFY':
			console.log('actiondata: ', action.data)
			const newState = `you ${action.data.message} '${action.data.anecdote}'`
			return newState
		case 'NULL':
			return null
		default:
			return state
	}
}

export default notificationReducer

