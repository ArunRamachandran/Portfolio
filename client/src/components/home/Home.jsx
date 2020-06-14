import React, { Component } from 'react';
import ScrollButton from '../scroller/ScrollButton.jsx';
import img from '../../static/arun.jpg';
import ImageWrapper from '../image-wrapper/ImageWrapper.jsx';

export default class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			isComponentHidden: false
		}
	}

	componentDidMount() {
	    this.prev = window.scrollY;
	    window.addEventListener('scroll', e => this.handleNavigation(e));
	}

	handleNavigation = (e) => {
	    const window = e.currentTarget;

	    if (this.prev > window.scrollY) {
	        // scrolling up
	        this.state.isComponentHidden && this.enable();
	    } else if (this.prev < window.scrollY) {
	        // scrolling down
	        !this.state.isComponentHidden && this.disable();
	    }
	    this.prev = window.scrollY;
	};

	disable = () => {
		this.setState({
			isComponentHidden: true
		})
	}

	enable = () => {
		this.setState({
			isComponentHidden: false
		})
	}

	render() {
		return (
			<div className="portfoliio-container">
				<div className="nav-bar">
					<div className="nav-bar-item">
						<span>Say Hello</span>
					</div>
				</div>
				<div className="home-wrapper"> 
					<div className="inline-content-wrapper">
						{/*<div className="image-chopper">
							<img src={img} alt="Arun" width="100" height="50" className="profile-pic"/>
						</div>*/}
						<ImageWrapper src={img} alt="Arun" width="100" height="50" className="profile-pic"/>
						<div className="right-content-holder">
							<div className="intro-content">
								<span className="intro-text">Hey, I'm Arun</span>
								<span className="intro-icon">👋.</span>
							</div>
							<p className="intro-text-occ">Front-End Developer & Technologist</p>						
						</div>
					</div>
					<div className="bottom-text-wrapper">
						<p>I design and code beautifully simple things, and I love what I do.</p>
					</div>
				</div>
				<div className={`scroll-down-icon ${this.state.isComponentHidden ? 'hide' : ''}`}>
					<ScrollButton/>
				</div>
			</div>
		)
	}
}