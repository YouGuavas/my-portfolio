import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/300.jpg';
import library from '../images/projects/library300.jpg'
import urlShortener from '../images/projects/urlshortener.jpg';


export default class Projects extends Component {
	constructor() {
		super();
		this.state = {
			projects: [
				{
					image: library,
					title: "The-Library", 
					description: ["Skills: React, node/express, MongoDB, Twitter API, Bulma", "A full-stack app written with the MERN stack which allows users to create and comment on descriptions of books they've read."],
					github: "The-Library",
					production: "https://the-library-of-guavas.herokuapp.com/"
				},
				{
					image: urlShortener,
					title:"URL Shortener Microservice",
					description: ["Skills: node/express, MongoDB", "A basic URL shortener. This was part of my introduction to back-end coding with node/express."],
					production: "https://url-shortener-guava.glitch.me/"
			},
				{},
				{}			
			]
		}
	}

	render() {
		const basegithub = "https://github.com/YouGuavas/";
		const description = "Lorem ipsum dolor sit amet, vitae suscipit pertinacia sed ut. Te mundi aliquam delicata mel, no quo dictas invenire adipiscing, pro et quot menandri disputationi. Appetere facilisis gloriatur et eum. Odio commodo maiorum ut has, cum ad volumus voluptatibus."
		return(
			<section className='projects' id='projects'>
				<h1>Projects</h1>
				<div className="project-container">
					{this.state.projects.map((project, index) => (
						<Project key={index} image={project.image || image} title={project.title || 'Title'} description={project.description || description} github={project.github ? basegithub + project.github : "#"} production={project.production || "#"} />
					))}
				</div>
			</section>
		)
	}
}

class Project extends Component {
	render() {
		const desc = this.props.description;
		return(
			<div className='project'>
				<h4>{this.props.title}</h4>
				<div className='project-image' style={{backgroundImage: `url("${this.props.image}")`}} ></div>
				<article>{Array.isArray(desc) ? desc.map((line, index) => (<p key={index}>{line}</p>)) : <p>{desc}</p>}</article>
				<a href={this.props.github} className="icon-anchor icon-anchor-1"><FontAwesomeIcon icon={['fab', 'github']} /> View on Github</a>
				<a href={this.props.production} className='icon-anchor icon-anchor-2'>View Site</a>
			</div>
		)
	}
}