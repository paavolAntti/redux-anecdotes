import axios from 'axios'
import {getId} from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async() => {
	const response = await axios.get(baseUrl)
	return response.data
}

const createNew = async (content) => {
	const object = {
		content: content,
		id: getId(),
		votes: 0
	}
	const response = await axios.post(baseUrl, object)
	return response.data
}

const update = async (id) => {
	const object = await axios.get(`${baseUrl}/${id}`)

	const newObject = {
		content: object.data.content,
		id: object.data.id,
		votes: object.data.votes + 1
	}
	const response = await axios.put(`${baseUrl}/${id}`, newObject)
	return response.data
}

export default { getAll, createNew, update }