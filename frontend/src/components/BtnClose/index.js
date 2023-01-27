import React from 'react';

const BtnClose = ({ setIsSidebarOpen }) => {
	return (
		<div className='btn-close' onClick={() => setIsSidebarOpen(false)}>
			<span className='btn-close__left'></span>
			<span className='btn-close__right'></span>
		</div>
	);
};

export default BtnClose;
