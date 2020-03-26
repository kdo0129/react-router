import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
	return (
		<>
			<h3>유저 목록 :</h3>
			<ul>
				<li>
					<NavLink
						to="/profiles/kim"
						activeStyle={{ background: '#000', color: '#fff' }}
						activeClassName={'active'}
					>
						kim
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/profiles/gildong"
						activeStyle={{ background: '#000', color: '#fff' }}
					>
						gildong
					</NavLink>
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
