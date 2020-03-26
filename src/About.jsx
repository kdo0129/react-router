import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
	console.log(location);
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true,
	});
	console.log(query);
	const detail = query.detail === 'true';

	return (
		<>
			<h1>About 페이지</h1>
			<p>About 페이지 내용입니다.</p>
			{detail && <p>상세한 내용이 보입니다.</p>}
		</>
	);
};

export default About;
