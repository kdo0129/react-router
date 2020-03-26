import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">홈 화면</Link>
				</li>
				<li>
					<Link to="/about">About 화면</Link>
				</li>
			</ul>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
			<Route path="/profiles/:username" component={Profile} />
		</div>
	);
}

export default App;
