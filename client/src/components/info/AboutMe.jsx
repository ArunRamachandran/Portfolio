import React, { Component } from 'react';
import ImageWrapper from '../image-wrapper/ImageWrapper.jsx';

import img from '../../static/memoji.png';
import code from '../../static/code.png';
import js from '../../static/icons8-javascript-144.png';
import git from '../../static/icons8-git-144.png';
import aws from '../../static/icons8-amazon-web-services-144.png';
import github from '../../static/icons8-github-120.png';
import html5 from '../../static/icons8-javascript-html.png';
import jenkins from '../../static/icons8-jenkins-144.png';
import linux from '../../static/icons8-linux-96.png';
import react from '../../static/icons8-react-native-144.png';
import redux from '../../static/icons8-redux-144.png';
import vsCode from '../../static/icons8-visual-studio-code-2019-144.png';
import webpack from '../../static/icons8-webpack-128.png';
import nodejs from '../../static/icons8-nodejs-144.png';
import docker from '../../static/icons8-docker-144.png';
import nginx from '../../static/icons8-nginx-144.png';
import css3 from '../../static/icons8-css3-144.png';

import AppSlick from '../slick/AppSlick.jsx';


export default class AboutMe extends Component {

	render() {
		const techStack = [
			<ImageWrapper src={js} alt="Memoji" width="100" height="100" className="right-panel-img"/>,
			<ImageWrapper src={react} alt="CodeWeb" width="100" height="100" className="code-web"/>,
			<ImageWrapper src={redux} alt="Memoji" width="100" height="100" className="right-panel-img"/>,
			<ImageWrapper src={webpack} alt="CodeWeb" width="100" height="100" className="code-web"/>,
			<ImageWrapper src={html5} alt="CodeWeb" width="100" height="100" className="code-web"/>,
			<ImageWrapper src={css3} alt="CodeWeb" width="100" height="100" className="code-web"/>,
			<ImageWrapper src={git} alt="Memoji" width="100" height="100" className="right-panel-img"/>,
			<ImageWrapper src={aws} alt="CodeWeb" width="100" height="100" className="code-web"/>,
			<ImageWrapper src={nodejs} alt="Memoji" width="100" height="100" className="right-panel-img"/>,
			<ImageWrapper src={docker} alt="CodeWeb" width="100" height="100" className="code-web"/>,
			<ImageWrapper src={linux} alt="Memoji" width="100" height="100" className="right-panel-img"/>,
			<ImageWrapper src={jenkins} alt="CodeWeb" width="100" height="100" className="code-web"/>,
			<ImageWrapper src={nginx} alt="Memoji" width="100" height="100" className="right-panel-img"/>,
			<ImageWrapper src={vsCode} alt="Memoji" width="100" height="100" className="right-panel-img"/>,
		];
		return (
			<div className="about-me-wrapper">
				<div className="about-me-title">
					<h3>What I can do.</h3>
				</div>
				<div className="about-me-description">
					<div className="about-me-left-panel">
						<p className="description-title">Develop what you need.</p>
						<p className="description-content">I'm a developer, so I know how to create your web applications to run across devices using the latest technologies available.<br/><br/>
							Powered by JavaScript, ReactJS, VS Code and coffee, I can bring your ideas to life.</p>
					</div>
					<div className="about-me-right-panel">
						<ImageWrapper src={img} alt="Memoji" width="165" height="160" className="right-panel-img"/>
						<div className="position-right">
							<ImageWrapper src={code} alt="CodeWeb" width="50" height="50" className="code-web" customClassName="position-right"/>
						</div>
					</div>
				</div>
				<div className="image-slider">
					<AppSlick elements={techStack}/>
				</div>
			</div>
		);
	}
}