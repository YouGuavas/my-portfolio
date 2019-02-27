import React, {Component} from 'react';


export default class Nav extends Component {
	render() {
		return(
			<ul>
				<li id="brand"><a href={this.props.links.brand[1]}>{this.props.links.brand[0]}</a></li>
				<div className="li-container">
					{this.props.links.other.map((link, index) => {
						return(
						<li key={index}>
							<a href={link[1]}>
								{link[0]}
							</a>
						</li>)
						}
					)}
				</div>
			</ul>
			)
	}
}