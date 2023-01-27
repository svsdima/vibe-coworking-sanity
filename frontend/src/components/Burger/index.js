import React from 'react';

const Burger = ({ setIsSidebarOpen }) => {
	return (
		<div className='burger' onClick={() => setIsSidebarOpen(true)}>
			<span></span>
		</div>
	);
};

export default Burger;
