import React, { Component } from 'react';

const Button = (props) => {

	return (
		<div className={`${props.className} custom-mini-button`} onClick={() => window.open("https://happiness-project.net/", "_blank")}>
			<span className="button-inline-label">{props.label}</span>
			{props.icon}
		</div>
	);
};

export default Button;