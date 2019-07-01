import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class Contact extends Component {
	render() {
		return(
			<section className="footer" id="contact">
				<div className="footer-container">
					<a href='https://github.com/YouGuavas' id='github' ><FontAwesomeIcon icon={['fab', 'github']} /> Github</a>
          <a href='https://www.linkedin.com/in/patrick-yambrick-633099122/' id='linkedin' ><FontAwesomeIcon icon={['fab', 'linkedin']} /> Linkedin</a>
					<p>Made with React and CSS Grid. Check out the github repo for this Portfolio right <a href="#">here</a></p>
				</div>
			</section>
		)
	}
}