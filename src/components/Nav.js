import React, {Component} from 'react';


export default class Nav extends Component {
	render() {
		return(
			<ul>
				<li id="brand"><a href="#">Brand</a></li>
				<div className="li-container">
					<li><a href="#projects">Things I've Made</a></li>
					<li><a href="#">Item 2</a></li>
				</div>
			</ul>
			)
	}
}