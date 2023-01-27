import React, { useState } from 'react';
import CallModal from '../CallModal';

const PhoneHeader = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<>
			<div className='phone-header'>
				<a href='tel:+76548760909' className='phone-header__link'>
					+7 (654) 876 09 09
				</a>
				<div className='phone-header__call'>
					<div className='phone-header__call-icon'>
						<i className='fa-solid fa-phone'></i>
					</div>
					<span className='phone-header__call-link' onClick={() => setIsOpenModal(true)}>
						Обратный звонок
					</span>
				</div>
			</div>
			<CallModal open={isOpenModal} close={() => setIsOpenModal(false)} />
		</>
	);
};

export default PhoneHeader;
