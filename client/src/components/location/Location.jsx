import React, { Component } from 'react';
import location from '../../static/icons8-region-100.png';

const Location = (props) => {

	return (
		<div className="geo-location">
			<img src={location} alt="location"/>
			<p>{props.geoLocation}</p>
		</div>
	);
};

export default Location;