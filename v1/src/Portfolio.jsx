import React, { Component } from 'react';
import Home from './components/home/Home.jsx';
import AboutMe from './components/info/AboutMe.jsx';
import WorkPortfolio from './components/work/WorkPortfolio.jsx';
import ContactDetails from './components/contact-details/ContactDetails.jsx';

export default class Portfolio extends Component {
	

	render() {
		return (
			<div className="portfolio-functional-wrapper">
				<Home/>
				<AboutMe/>
				<WorkPortfolio/>
				<ContactDetails/>
			</div>
		);
	}	
}