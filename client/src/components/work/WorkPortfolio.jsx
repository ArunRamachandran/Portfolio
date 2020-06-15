import React, { Component } from 'react';
import WiproDigitalLogo from '../../static/wipro-digital-logo.png';
import CreditCards from '../../static/credit-cards.png';
import O3 from '../../static/Option3.io.png';
import analytics from '../../static/analytics.png';

// Content reference: https://gomedici.com/companies/option3-io

export default class WorkPortfolio extends Component {

	render() {
		return (
			<div className="work-portfolio-wrapper">
				<h3 className="work-title">Work.</h3>
				<div className="work-page">
					<div className="wipro-digital">
						<img src={WiproDigitalLogo} alt="WiproDigitalLogo" height="36"/>
						<div className="work-description-container">
							<p className="wipro-digital-description">As the <strong>Technologist</strong> for Wipro Digital, I worked with the one of the largest banking group in the UK to overhaul their digital transformation, developing customer centric user interfaces and banking functionalities.</p>
							<img src={CreditCards} alt="banking" height="125" width="125"/>
						</div>
					</div>
					<div className="work-page-row-2">
						<div className="work-history-past">
							<div className="prev-experience-container">
								<div className="prev-work-title-wrapper">
									<img src={O3} alt="O3" height="36"/>
									<p>Option3.io</p>
								</div>
								<div className="prev-work-description-container">
									<p className="prev-work-description">Early on at Option3.io, I worked as Senior Product Engineer to design and develop Docube, an end-to-end big data analytics platform.</p>
									<img src={analytics} alt="banking" height="125" width="125"/>
								</div>
							</div>
							<p>Option3.io</p>
						</div>
						<div className="personal-project">
							<p>Happiness Project</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}