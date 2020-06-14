import React, { Component } from 'react';
import ImageWrapper from '../image-wrapper/ImageWrapper.jsx';
import img from '../../static/memoji.png';

export default class AboutMe extends Component {

	render() {
		return (
			<div className="about-me-wrapper">
				<div className="about-me-title">
					<h3>What I can do.</h3>
				</div>
				<div className="about-me-description">
					<div className="about-me-left-panel">
						<p className="description-title">Develop what you need.</p>
						<p className="description-content">I'm a developer, so I know how to turn your business ideas into web application and to make it run across devices using the latest technologies available.</p>
					</div>
					<div className="about-me-right-panel">
						<ImageWrapper src={img} alt="Memoji" width="165" height="160" className="right-panel-img"/>
					</div>
				</div>
			</div>
		);
	}
}