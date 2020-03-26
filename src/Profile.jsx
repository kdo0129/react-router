import React from 'react';

const profileData = {
	kim: {
		name: '김도움',
		description: 'Frontend Engineer',
	},
	gildong: {
		name: '홍길동',
		description: '전래동화의 주인공',
	},
};

const Profile = ({ match }) => {
	// console.log(match);
	const { username } = match.params;
	// console.log(username);
	const profile = profileData[username];
	// console.log(profile);
	if (!profile) return <div>존재하지 않는 유저입니다.</div>;

	return (
		<>
			<h3>
				{username} ({profile.name})
			</h3>
			<p>{profile.description}</p>
		</>
	);
};

export default Profile;
