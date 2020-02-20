export const filterChange = (filter) => {
	return {
		type: 'FILTER',
		data: {filter}
	}
}

const filterReducer = (state = null, action) => {
	switch (action.type) {
		case 'FILTER':
			return action.data.filter
		default:
			return state
	}
}

export default filterReducer