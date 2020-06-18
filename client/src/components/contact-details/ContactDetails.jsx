import React, { Component } from 'react';
import githubIcon from '../../static/github-logo.png';
import Button from '../button/Button.jsx';
import view from '../../static/icons8-binoculars-100.png';

import linkedIn from '../../static/linkedin.png';
import github from '../../static/icons8-github-120.png';
import stackOverflow from '../../static/icons8-stack-overflow-144.png';
import angelList from '../../static/icons8-angellist-144.png';
import facebook from '../../static/facebook.png';
import instagram from '../../static/instagram.png';
import gmail from '../../static/icons8-gmail-144.png';

export default class Contacts extends Component {

	navigateToGithub = () => {
		 window.open("https://github.com/ArunRamachandran?tab=repositories", "_blank");
	}

	triggerEmail = () => {
		window.location = "mailto:myself.arunkr@gmail.com";
	}

	render() {

		return(
			<div className="contact-me-wrapper">
				<div className="open-source-info">
					<h3>GitHub</h3>
					<img src={githubIcon} height="90" width="90"/>
					<h4>Find my open source projects and contributions in GitHub.</h4>
					<Button className="github-projects" label="View Projects" onClick={this.navigateToGithub}/>
				</div>
				<div className="contact-info">
					<div className="colloboration-panel">
						<div className="colloboration-text-wrapper">
							<p className="text-description">Interested in collaborating or working together? We should queue up a chat. I’ll buy the coffee.</p>
							<Button className="message-link" label="Message me" onClick={this.triggerEmail} icon={<img src={gmail} alt="gmail-icon" height="20" width="20"/>}/>
						</div>
					</div>
					<div className="social-info">
						<p>#Let's connect.</p>
						<div className="social-icons-panel">
							<img src={linkedIn} alt="linkedIn-icon" height="40" width="40" onClick={ () => window.open("https://www.linkedin.com/in/arun-ramachandran/", "_blank")}/>
							<img src={github} alt="github-icon" height="40" width="40" onClick={ () => window.open("https://github.com/ArunRamachandran?tab=repositories", "_blank")}/>
							<img src={stackOverflow} alt="stackOverflow-icon" height="40" width="40" onClick={ () => window.open("https://stackoverflow.com/users/4869449/arun-ramachandran", "_blank")}/>
							<img src={angelList} alt="angelList-icon" height="40" width="40" onClick={ () => window.open("https://angel.co/u/arun-ramachandran-2", "_blank")}/>
							<img src={instagram} alt="instagram-icon" height="40" width="40" onClick={ () => window.open("https://www.instagram.com/_arun.ramachandran/", "_blank")}/>
							<img src={facebook} alt="facebook-icon" height="40" width="40" onClick={ () => window.open("https://www.facebook.com/arun.ramachandran.568", "_blank")}/>
						</div>
					</div>
				</div>
				<div className="page-footer">
					<div className="footer-nav">
						<p className="hire-me-link" onClick={this.triggerEmail}>Hire me</p>
						<span className="amazing-text">
							<span>© 2020</span>
							<span className="underline">Arun K Ramachandran</span> 
							<span>All rights reserved.</span>
						</span>
					</div>
				</div>
			</div>
		)
	}
}