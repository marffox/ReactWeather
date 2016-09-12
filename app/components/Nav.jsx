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

var Nav = () => {
	return (
		<div>
			<h2>Nav component</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
		</div>
	);
}

module.exports = Nav;
