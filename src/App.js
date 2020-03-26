import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

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
				<li>
					<Link to="/profiles">Profile 화면</Link>
				</li>
				<li>
					<Link to="/history">History 예제</Link>
				</li>
			</ul>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
			<Route path="/profiles" component={Profiles} />
			<Route path="/history" component={HistorySample} />
		</div>
	);
}

export default App;
