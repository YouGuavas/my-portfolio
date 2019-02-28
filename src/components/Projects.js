import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/300.jpg';


export default class Projects extends Component {

	render() {
		return(
			<section className='page-section projects' id='projects'>
				<h1>Projects</h1>
				<div className="project-container">
					<Project />
					<Project />
				</div>
			</section>
		)
	}
}

class Project extends Component {
	render() {
		return(
			<div className='project'>
				<img src={ image } />
				<p></p>
				<a href="#" className="icon-anchor icon-anchor-1"><FontAwesomeIcon icon={['fab', 'github']} /> View on Github</a>
				<a href="#" className='icon-anchor icon-anchor-2'>View Site</a>
			</div>
		)
	}
}