import { handleActions } from 'redux-actions'

let initialState = {
	data:[],
	totalCount:0,
	totalPrice:0
}
const Home = handleActions({
	changeData: (state, action) => ({
		...state,
		data: action.payload
	}),
	changeTotalCount: (state, action) => ({
		...state,
		totalCount: action.payload.totalCount
	}),
	changeTotalPrice: (state, action) => ({
		...state,
		totalPrice: action.payload.totalPrice
	})
}, initialState)

export default Home
