import React from 'react';

const SuccessModal = ({ name, close }) => {
	console.log(name);
	return (
		<article className='success-modal'>
			<div className='block' onClick={close}></div>
			<div className='container'>
				<div className='success-modal__wrapper'>
					<div className='success-modal__close btn-close' onClick={close}>
						<span className='btn-close__left'></span>
						<span className='btn-close__right'></span>
					</div>
					<h2 className='success-modal__title'>
						Спасибо <span>{name}</span>!
					</h2>
					<p className='success-modal__text'>В ближайшее время с вами свяжется наш консультант.</p>
					<p className='success-modal__text'>
						С уважением <span>Vibe Coworking</span>!
					</p>
				</div>
			</div>
		</article>
	);
};

export default SuccessModal;
