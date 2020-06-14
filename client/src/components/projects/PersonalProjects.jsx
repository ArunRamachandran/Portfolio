import React, { Component } from 'react';

export default class PersonalProjects extends Component {

	render() {

		return() {
			<div className="personal-projects-wrapper">
				<div className="personal-project-title-holder"> 
					<h3>Personal Projects</h3>
				</div>
				<div className="personal-projects-details-section">
					<div className="project-description">
						<p>Happiness Project</p>
					</div>
					<div className="project-description">
						<p>BusyBee</p>
					</div>
					<div className="project-description">
						<p>Personal portfolio</p>
					</div>
					<div className="project-description">
						<p>GitHub search engine</p>
					</div>
					<div className="project-description">
						<p>Scalable React-Redux architecture</p>
					</div>
				</div>
				<div className="Open source Projects">
				</div>
			</div>
		}
	}
}