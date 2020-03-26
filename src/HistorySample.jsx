import React, { useEffect } from 'react';

const HistorySample = ({ history }) => {
	const goBack = () => {
		history.goBack();
	};

	const goHome = () => {
		history.push('/');
	};

	const goReplaceHome = () => {
		history.replace('/');
	};

	useEffect(() => {
		console.log(history);
		const unblock = history.block('지금 화면을 떠나시겠습니까?');
		return () => {
			unblock();
		};
	}, [history]);
	return (
		<>
			<button onClick={goBack}>뒤로가기</button>
			<button onClick={goHome}>홈으로</button>
			<button onClick={goReplaceHome}>replace 홈</button>
		</>
	);
};

export default HistorySample;
