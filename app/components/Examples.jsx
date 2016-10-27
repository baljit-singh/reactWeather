var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>Examples component!</h3>
// 		);
// 	}
// });

var Examples = () => {
	return (
			<div>
				<h1 className="text-center">Examples</h1>
				<p>Here are the few Examples to try:</p>
				<ol>
					<li>
						<Link to="/?location=chandigarh">Chandigarh, India</Link>
					</li>
					<li>
						<Link to="/?location=bangalore">Bangalore, India</Link>
					</li>
				</ol>
			</div>
		)
};

module.exports = Examples;