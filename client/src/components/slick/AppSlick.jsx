import React, { Component } from 'react';
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import react from '../../static/icons8-react-native-144.png';
import redux from '../../static/icons8-redux-144.png';
import vsCode from '../../static/icons8-visual-studio-code-2019-144.png';
import webpack from '../../static/icons8-webpack-128.png';
import ImageWrapper from '../image-wrapper/ImageWrapper.jsx';

export default class AppSlick extends Component {

	render() {
		const settings = {
	      dots: true,
	      infinite: true,
	      slidesToShow: 4,
	      slidesToScroll: 1,
	      autoplay: true,
	      autoplaySpeed: 2000,
	      pauseOnHover: true,
	      variableWidth: true
	    };

	    return(
	    	<div className="app-slick-container">
	    		<Slider {...settings}>
	    			{this.props.elements && this.props.elements.map
	    				((ele) => 
	    					<div className="padded-mobile-width">
	    						{ele}
	    					</div>
	    				)
	    			}
	    		</Slider>
	    	</div>
	    );
	}
}