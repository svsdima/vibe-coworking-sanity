import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ logo }) => {
	return (
		<>
			<Link to='/' className='logo'>
				<img src={logo} alt='logo' />
			</Link>
		</>
	);
};

export default Logo;
