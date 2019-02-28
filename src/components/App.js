import React, {Component} from 'react';
import Nav from './Nav';
import Projects from './Projects';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faHome, faAddressBook, faProjectDiagram} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHome, faAddressBook, faProjectDiagram);


export default class App extends Component {
	render() {
		return(
				<div>
					<Main langs={['HTML5', 'CSS3', 'JavaScript', 'Python']} frameworks={['React', 'nodejs', 'Bootstrap', ]}/>
					<Projects />
					<Contact />
				</div>
			)
	}
}

class Main extends Component {

	render() {
		return(
			<section className='jumbo page-section'>
				<Nav links={{brand: ["Patrick", "#"], other: [["Things I've made", "#projects", "project-diagram"], ["Contact Me", "#contact", "address-book"]]}} />
				<div className='container'>
					<h1>Patrick Yambrick</h1>
					<article>
						<p>I am a Full-stack Web Developer.</p>
					</article>
					<div className="main-skills">
						<h3>Skills</h3>
						<ul>
							<li>Languages:</li>
							{this.props.langs.map((lang, index) => {
								return (<li className="skill" key={index}>{lang}</li>)
							})}
						</ul>
						<ul>
							<li>Frameworks:</li>
							{this.props.frameworks.map((fw, index) => {
								return (<li className="skill" key={index}>{fw}</li>)
							})}
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

class Contact extends Component {
	render() {
		return(
			<section className="footer" id="contact">
				<div className="footer-container">
					<a href='https://github.com/YouGuavas'><FontAwesomeIcon icon={['fab', 'github']} /> Github</a>
					<a href='#'><FontAwesomeIcon icon={['fab', 'linkedin']} /> Linkedin</a>
				</div>
			</section>
		)
	}
}
