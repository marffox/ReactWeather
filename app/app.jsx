var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// var Route = require('react-router').Route; es lo mismo que lo de arriba

// var obj = {
// 	name: 'Rafael',
// 	surname: 'Marfil'
// };

// var {name, surname} = obj;
// console.log(name, surname); output -> Rafael Marfil. Igual que -> var name = obj.name;

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
//css es el loader para usar foundation
//style es el loader para inyectar el css en el documento
$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
  		<Route path="/" component={Main}>
  			<Route path="about" component={About}/>
  			<Route path="examples" component={Examples}/>
  			<IndexRoute component={Weather}/>
  		</Route>
  	</Router>,
  	document.getElementById('app')
);
