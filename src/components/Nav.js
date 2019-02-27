import React, {Component} from 'react';


export default class Nav extends Component {
	render() {
		return(
			<ul>
				<li id="brand"><a href="#">Patrick</a></li>
				<div className="li-container">
					<li><a href="#projects">Things I've Made</a></li>
					<li><a href="#contact">Contact Me</a></li>
				</div>
			</ul>
			)
	}
}