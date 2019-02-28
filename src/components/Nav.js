import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Nav extends Component {
	render() {
		return(
			<ul className="nav-bar">
				<li id="brand"><a href={this.props.links.brand[1]}><span className='hidden-text'>{this.props.links.brand[0]}</span><span className='hidden-icon'><FontAwesomeIcon icon={['fas', 'home']} /></span></a></li>
				<div className="li-container">
					{this.props.links.other.map((link, index) => {
						return(
						<li key={index}>
							<a href={link[1]}>
								<span className='hidden-text'>{link[0]}</span>
								<span className='hidden-icon'><FontAwesomeIcon icon={['fas', link[2]]} /></span>
							</a>
						</li>)
						}
					)}
				</div>
			</ul>
			)
	}
}