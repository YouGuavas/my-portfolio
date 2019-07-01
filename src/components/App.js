import React, {Component} from 'react';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faHome, faAddressBook, faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import ReactTypingEffect from 'react-typing-effect';


library.add(fab, faHome, faAddressBook, faProjectDiagram);


export default class App extends Component {
	render() {
		return(
				<div>
					<Main langs={['HTML', 'CSS', 'JavaScript']} frameworks={['React', 'nodejs/express', 'Bootstrap', ]}/>
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
				<div className="main-grid">
				<div className='container main'>
					<h1>Patrick Yambrick</h1>
					<article>
						<p><ReactTypingEffect staticText="I am a" text={["Software Engineer.", "Web Developer."]} speed={100}/></p>
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
				</div>
			</section>
		)
	}
}

