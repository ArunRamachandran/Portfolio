import React, { Component } from 'react';
import Location from '../location/Location.jsx';
import Button from '../button/Button.jsx';
import WiproDigitalLogo from '../../static/wipro-digital-logo.png';
import CreditCards from '../../static/credit-cards2.png';
import O3 from '../../static/Option3.io.png';
import analytics from '../../static/analytics2.png';
import startup from '../../static/startup.png';
import view from '../../static/icons8-binoculars-100.png';

// Content reference: https://gomedici.com/companies/option3-io

export default class WorkPortfolio extends Component {

	navigateToHappinessProject = () => {
		 window.open("https://happiness-project.net/", "_blank");
	}

	render() {
		return (
			<div className="work-portfolio-wrapper">
				<h3 className="work-title">Work.</h3>
				<div className="work-page">
					<div className="wipro-digital">
						<img src={WiproDigitalLogo} alt="WiproDigitalLogo" height="36"/>
						<div className="work-description-container">
							<p className="wipro-digital-description">As the <strong>Technologist</strong> for Wipro Digital, I worked with the one of the largest banking group in the UK to overhaul their digital transformation, developing customer centric user interfaces and banking functionalities.</p>
							<img src={CreditCards} alt="banking" height="200" width="200"/>
						</div>
						<Location geoLocation="Chester, United Kingdom"/>
					</div>
					<div className="work-page-row-2">
						<div className="work-history-past">
							<div className="prev-experience-container">
								<div className="prev-work-title-wrapper">
									<img src={O3} alt="O3" height="36"/>
									<p>Option3.io</p>
								</div>
								<div className="prev-work-description-container">
									<p className="prev-work-description">Early on at Option3.io, I worked as <strong>Senior Product Engineer</strong> to design and develop Docube, an end-to-end big data visual analytics platform which is now integrated with the inhouse RPA product jiffy.ai</p>
									<img src={analytics} alt="banking" height="125" width="125"/>
								</div>
							</div>
							<Location geoLocation="Banglore, India"/>
						</div>
						<div className="personal-project">
							<div className="corner-ribbon top-right sticky red">personal-project</div>
							<div className="personal-project-title">
								<img src={startup} alt="HappinessProject"/>
								<h3>Happiness Project</h3>
							</div>
							<Button className="project-view-button" label="View Project" icon={<img src={view} width="20" height="20"/>} onClick={this.navigateToHappinessProject}/>
							<p className="project-description">A digital media platform designed to bring the most delightful contents around the world.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}