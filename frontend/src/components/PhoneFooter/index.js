import React from 'react';

const PhoneFooter = () => {
	return (
		<div className='phone-footer'>
			<a href='tel:+79806879898' className='phone-footer__link'>
				+7 (980) 687-98-98
			</a>
			<div className='phone-footer__call'>
				<i className='fa-solid fa-phone'></i>
				<span>Звонок бесплатный</span>
			</div>
		</div>
	);
};

export default PhoneFooter;
