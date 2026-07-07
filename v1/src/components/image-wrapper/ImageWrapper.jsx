import React, { Component } from 'react';

const ImageWrapper = (props) => (
	<div className={`image-chopper ${props.customClassName}`}>
		<img 
			src={props.src} 
			alt={props.alt} 
			width={props.width} 
			height={props.height} 
			className={props.className}/>
	</div>
);

export default ImageWrapper;