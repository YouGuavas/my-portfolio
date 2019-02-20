import React, {Component} from 'react';
import Nav from './Nav';
import Counter from './Counter';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			active: 0,
			0: <Main active={0} handleClick={this.handleClick} />,
			1: <Project1 active={1} handleClick={this.handleClick} />,
			2: <Project1 active={2} handleClick={this.handleClick} />
		}
	}

	handleClick = (index) => {
		this.setState({
			active: index
		})
	}
	render() {
		return(
				<div>
					{this.state[this.state.active]}
				</div>
			)
	}
}

class Main extends Component {

	render() {
		return(
			<section className='jumbo'>
				<div className='container'>
					<h1>Patrick Yambrick</h1>
					<article>
						<p>I am a Full-stack Web Developer.</p>
					</article>
				</div>
				<Counter active={this.props.active} handleClick={(index) => {this.props.handleClick(index)} } />
			</section>
			)
	}
}
class Project1 extends Component {
	render() {
		return(
			<section className=''>
				<Counter total={this.props.total}  active={this.props.active} handleClick={(index) => {this.props.handleClick(index)} } />
			</section>
			)
	}
}
