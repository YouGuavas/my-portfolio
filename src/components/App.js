import React, {Component} from 'react';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


export default class App extends Component {
	render() {
		return(
				<div>
					<Main />
					<Projects />
				</div>
			)
	}
}

class Main extends Component {

	render() {
		return(
			<section className='jumbo page-section'>
				<Nav />
				<div className='container'>
					<h1>Patrick Yambrick</h1>
					<article>
						<p>I am a Full-stack Web Developer.</p>
					</article>
				</div>
			</section>
		)
	}
}

class Projects extends Component {

	render() {
		return(
			<section className='page-section projects' id='projects'>
				<h1>Projects</h1>
				<Project />
				<Project />
			</section>
		)
	}
}

class Project extends Component {
	render() {
		return(
			<div className='project'>
				<img src='' />
				<p></p>
				<a href="#" className="icon-anchor icon-anchor-1"><FontAwesomeIcon icon={ faGithub } /> View on Github</a>
				<a href="#" className='icon-anchor icon-anchor-2'>View Site</a>
			</div>
		)
	}
}