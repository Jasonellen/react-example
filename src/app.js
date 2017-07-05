// application's entry
require('es6-promise').polyfill()
require('isomorphic-fetch')
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {compose, createStore, applyMiddleware} from 'redux'
import FastClick from 'fastclick' // 解决移动端300ms延迟
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from 'reducers/index'
import Routers from './routers/router'
import './style/common.scss'
// 解决移动端300ms延迟
window.addEventListener('load', () => {
	FastClick.attach(document.body)
})

const middleWares = [thunk]
if (process.env.NODE_ENV == 'development') {
	const logger = createLogger()
	middleWares.push(logger)
}

const store = createStore(
	reducers,
	{},
	compose(
		applyMiddleware(...middleWares),
	)
)

// 开启局部热更新
if (module.hot) {
	module.hot.accept()
}

render((
	<Provider store={store}>
		<Routers />
	</Provider>
), document.getElementById('root'))
