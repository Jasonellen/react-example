import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Home from '../containers/Home'
import Detail from '../containers/Detail'

class Routers extends Component {
	render() {
		return (
			<Router history={hashHistory} key={Math.random()}>
				<Route path="/" component={Home}></Route>
				<Route path="/goods/:id" component={Detail}></Route>
			</Router>
		)
	}
}
export default Routers;
