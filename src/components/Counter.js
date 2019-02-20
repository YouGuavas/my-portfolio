import React, {Component} from 'react';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			total: 3
		}
	}

	render() {
		let rows = [];
		for (let i = 0; i < this.state.total; i++) {
			rows.push('');
		}
		return(
			<span className="counter">
				{
					rows.map((item, index) => {
						return((this.props.active === index) ? (
						 <div key={index} className="circle active" onClick={() => {this.props.handleClick(index)} }></div>
						 ) : (
						 <div key={index} className="circle" onClick={() => {this.props.handleClick(index)} }></div> 
						 )
						)
					})	
				}
			</span>
			)
	}
}