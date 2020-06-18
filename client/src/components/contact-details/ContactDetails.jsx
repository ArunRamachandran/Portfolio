import React, { Component } from 'react';
import githubIcon from '../../static/github-logo.png';
import Button from '../button/Button.jsx';
import view from '../../static/icons8-binoculars-100.png';

export default class Contacts extends Component {

	navigateToGithub = () => {
		 window.open("https://github.com/ArunRamachandran?tab=repositories", "_blank");
	}

	render() {

		return(
			<div className="contact-me-wrapper">
				<div className="open-source-info">
					<h3>GitHub</h3>
					<img src={githubIcon} height="90" width="90"/>
					<h4>Find more open source projects and contributions in GitHub.</h4>
					<Button className="github-projects" label="View Projects" icon={<img src={view} width="20" height="20"/>} onClick={this.navigateToGithub}/>
				</div>
				<div className="contact-info">
					<div className="hire-me">
						<p>Interested in working together</p>
					</div>
				</div>
			</div>
		)
	}
}