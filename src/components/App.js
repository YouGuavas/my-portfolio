import React, {Component} from 'react';
import Nav from './Nav';
import Projects from './Projects';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);


export default class App extends Component {
	render() {
		return(
				<div>
					<Main />
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
				<Nav links={{brand: ["Patrick", "#"], other: [["Things I've made", "#projects"], ["Contact Me", "#contact"]]}} />
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

class Contact extends Component {
	render() {
		return(
			<section className="footer" id="contact">
				<div className="footer-container">
					<a href='https://github.com/YouGuavas'><FontAwesomeIcon icon={['fab', 'github']} /> Hi</a>
					<a href='#'><FontAwesomeIcon icon={['fab', 'linkedin']} /> Hi there</a>
				</div>
			</section>
		)
	}
}
