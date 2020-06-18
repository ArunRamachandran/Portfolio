import React, { Component } from 'react';

const Button = (props) => {

	return (
		<div className={`${props.className} custom-mini-button`} onClick={props.onClick}>
			<span className="button-inline-label">{props.label}</span>
			{props.icon}
		</div>
	);
};

export default Button;