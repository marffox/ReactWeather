var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
// 	displayName: 'Navigation',
// 	render: function() {
// 		return (
// 			<div>
// 				<h2>Nav component</h2>
// 				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
// 				{IndexLink permite que el estilo que apliquemos al indes "/" sea anulado cuando clikamos en otro link,
// 				sin esto, el link de la pagina principal siempre estaria en bold ya que "/" siempre esta presente.
// 				React hace match entre el valor de "to" y la ruta del navegador.}
// 				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
// 				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
// 			</div>
// 		);
// 	}
// });

var React = require('react');

var Nav = React.createClass({
	displayName: 'Nav',
	onSearch: function (e) {
		e.preventDefault();
		alert('Not yet wired up!!');
	},
    render: function () {
    	return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Weather App</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather by city"/>
							</li>
							<li>
								<input type="submit" className="button" value="Get weather"/>
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;
