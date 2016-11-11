var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>About component!</h3>
// 		);
// 	}
// });


var About = (props) => {
	return (
			<div>
				<h1 className="page-title">About</h1>
				<p>This is the weather predictor app made using React, a javascript library. This is my first React app.</p>
				<p>Here are the tools i used:</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
					</li>
					<li>
						<a href="http://openweathermap.org">Open Weather Map</a> - I used this site to fetch weather data for my app.
					</li>
				</ul>
			</div>
		)
};

module.exports = About;