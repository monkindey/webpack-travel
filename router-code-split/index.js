import React, { Component } from 'react'
import {
	render
} from 'react-dom'

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

// import Home from './components/Home'
// import About from './components/About'
import Bundle from './components/Bundle'

const Home = () => (
	<Bundle load={ () => import('./components/Home') }>
		{ (Home) => Home ? <Home /> : null }
	</Bundle>
)

const About = () => (
	<Bundle load={ () => import('./components/About') }>
		{ (About) => About ? <About /> : null }
	</Bundle>
)

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>

					<Route exact path="/" component={ Home } />
					<Route path="/about" component={ About } />
				</div>
			</Router>
		)
	}
} 

render(
	<App />,
	document.getElementById('app')
)