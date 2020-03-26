import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
	return (
		<>
			<h3>유저 목록 :</h3>
			<ul>
				<li>
					<Link to="/profiles/kim">kim</Link>
				</li>
				<li>
					<Link to="/profiles/gildong">gildong</Link>
				</li>
			</ul>
			<Route
				path="/profiles"
				exact
				reder={() => <div>유저를 선택해주세요</div>}
			/>
			<Route path="/profiles/:username" component={Profile} />
		</>
	);
};

export default Profiles;
