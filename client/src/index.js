import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/Home.jsx';
import AboutMe from './components/info/AboutMe.jsx';

class Portfolio extends Component {
	render() {
		return (
			<div>
				<Home/>
				<AboutMe/>
			</div>
		)
	}
}

ReactDOM.render(<Portfolio/>, document.getElementById("root"));