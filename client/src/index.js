import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/Home.jsx';
import AboutMe from './components/info/AboutMe.jsx';
import PersonalProjects from './components/projects/PersonalProjects.jsx';
import WorkPortfolio from './components/work/WorkPortfolio.jsx';

class Portfolio extends Component {
	render() {
		return (
			<div>
				<Home/>
				<AboutMe/>
				<WorkPortfolio/>
				{/*<PersonalProjects/>*/}
			</div>
		)
	}
}

ReactDOM.render(<Portfolio/>, document.getElementById("root"));