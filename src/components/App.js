import React, {Component} from 'react';
import Nav from './Nav';


export default class App extends Component {
	render() {
		return(
				<div>
					<Main />
					<section className='page-section' id='projects'>
					</section>
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
