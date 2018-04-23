import React, {Component} from 'react'
// import { Carousel } from 'antd-mobile';
import './index.scss'
// import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as homeAction from 'actions/home.js';

import tu1 from 'static/1.jpg'

class Index extends Component {
	componentDidMount(){
		fetch('http://rapapi.org/mockjsdata/8591/api/mabeylike')
			.then(data => data.json())
			.then(data=>{
				this.props.changeData(data.data)
				this.props.getCount()
				this.props.getPrice()
			})

	}
	render () {
		const {data, totalCount, totalPrice} = this.props.state
		// var data = this.props.state.data
		// var totalCount = this.props.state.totalCount
		// var price = this.props.state.price
		return(
			<div className="Home">
				{/*<Carousel
					className="my-carousel"
					autoplay={true}
					infinite
					selectedIndex={1}
					swipeSpeed={35}
					beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
					afterChange={index => console.log('slide to', index)}
				>
					{
						data.map(function(item,i){
							return <a key={i} ><img src={item.img} style={{height:300,width:750}}/></a>
						})
					}
				</Carousel>*/}
				<img src={tu1} style={{width:100}} alt=""/>
				<div className="tu2"></div>
				<ul>
					{
						data.length>0
							?
							data.map((item, i)=>{
								return(
									<li key={i}>
										<img src={item.img} alt=""/>
										<span>{item.title}</span>
										<em>${item.price}</em>
										<div>
											<button onClick={()=>this.props.decrease(i)}>-</button>
											<span>{item.count}</span>
											<button onClick={()=>this.props.increase(i)}>+</button>
										</div>
									</li>
								)
							})
							:''
					}
				</ul>
				<p>
					<span className="left">数量：{totalCount}个</span>
					<span className="right">价格：${totalPrice}</span>
				</p>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		state:state.home
	}
};
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(homeAction, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
