import React from 'react';
import { useNavigate } from 'react-router-dom';

const BtnBack = ({ navigateTo }) => {
	const navigate = useNavigate();

	const navigateToLink = () => {
		navigate(navigateTo);
	};

	return (
		<div className='btn-back'>
			<span className='text' onClick={navigateToLink}>
				Назад
			</span>
		</div>
	);
};

export default BtnBack;
