import React, { Component } from 'react';
import Home from './components/home/Home.jsx';
import AboutMe from './components/info/AboutMe.jsx';
import PersonalProjects from './components/projects/PersonalProjects.jsx';
import WorkPortfolio from './components/work/WorkPortfolio.jsx';

export default class Portfolio extends Component {
	

	render() {
		return (
			<div className="portfolio-functional-wrapper">
				<Home/>
				<AboutMe/>
				<WorkPortfolio/>
			</div>
		);
	}	
}