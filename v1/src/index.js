import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<Portfolio/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById("root"));