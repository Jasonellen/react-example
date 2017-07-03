import { createActions } from 'redux-actions'
export const { changeData, changeTotalCount, changeTotalPrice} = createActions(
	'changeData',
	'changeTotalCount',
	'changeTotalPrice'
)

// 计算总数量
export const getCount = () => (dispatch, getState) => {
	let _data = getState().home.data
	let totalCount = 0;
	_data.map(function(item){
		totalCount += item.count
	})
	dispatch(changeTotalCount({totalCount}))
	// dispatch(changeTotalCount({totalCount:totalCount}))
}

// 计算总价格
export const getPrice = (data) => (dispatch, getState) => {
	let _data = getState().home.data
	let totalPrice = 0;
	_data.map(function(item){
		totalPrice += item.price * item.count
	})
	dispatch(changeTotalPrice({totalPrice}))
}

// 数量-1
export const decrease = (i) => (dispatch, getState) => {
	let _data = getState().home.data
	console.log(_data, 1)
	_data.map(function(item, index){
		if(index == i){
			_data[i].count--
		}
	})
	console.log(_data, 2)
	dispatch(changeData(_data))
	dispatch(getPrice())
	dispatch(getCount())
}
// 数量+1
export const increase = (i) => (dispatch, getState) => {
	let _data = getState().home.data
	_data.map(function(item, index){
		if(index == i){
			_data[i].count++
		}
	})
	dispatch(changeData(_data))
	dispatch(getPrice())
	dispatch(getCount())
}
