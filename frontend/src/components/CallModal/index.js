import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { feedbackSaveInfo } from '../../actions/feedbacksAction';
import SuccessModal from '../SuccessModal';
import { client } from '../../client';

const CallModal = ({ open, close }) => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [check, setCheck] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const handleSubmit = (e) => {
		if (name === '' || phone === '') {
			setErrorMessage(true);
		} else {
			setLoading(true);
			setErrorMessage(false);

			const contact = {
				_type: 'feedbacks',
				name: name,
				phone: phone,
			};

			client.create(contact).then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
				setCheck(false);
				document.body.style.overflow = 'hidden';
				setTimeout(() => {
					setIsFormSubmitted(false);
					setName('');
					setPhone('');
					document.body.style.overflow = '';
				}, 5000);
			});
		}
	};

	useEffect(() => {
		if (!isFormSubmitted) {
			document.body.style.overflow = '';
		}
	}, [isFormSubmitted]);
	return (
		<article className={open ? 'call-modal active' : 'call-modal'}>
			<div className='block' onClick={close}></div>
			<div className='container'>
				<div className='call-modal__wrapper'>
					<div className='call-modal__close btn-close' onClick={close}>
						<span className='btn-close__left'></span>
						<span className='btn-close__right'></span>
					</div>
					<form className='feedback__form' onSubmit={handleSubmit}>
						<h2 className='call-modal__title'>
							Будем <span>на связи</span>!
						</h2>
						<div className='feedback__list'>
							<div className='feedback__info'>
								<label className='feedback__label'>
									<i className='fa-regular fa-user'></i>
								</label>
								<input
									type='text'
									name='name'
									placeholder='Имя'
									className='feedback__input'
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								></input>
							</div>
							<div className='feedback__info'>
								<label className='feedback__label'>
									<i className='fa-regular fa-phone'></i>
								</label>
								<InputMask
									className='feedback__input'
									mask='+7 (999) 999-99-99'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									placeholder='+7 (___) ___-__-__'
									required
								></InputMask>
							</div>
							<button type='submit' className='feedback__btn btn'>
								<span>
									НАПИСАТЬ НАМ <i className='fa-regular fa-hand-back-point-up' />
								</span>
							</button>
							<div className='feedback__check'>
								<input
									type='checkbox'
									name='terms'
									value={check}
									onChange={() => !setCheck}
									required
								/>
								<p className='feedback__check__text'>
									Я согласeн(-на) на обработку моих персональных данных в соответствии с{' '}
									<Link to='/legal-information/terms-of-use'>условиями</Link>
								</p>
							</div>
						</div>
					</form>
				</div>
				{isFormSubmitted ? (
					<SuccessModal name={name} close={() => setIsFormSubmitted(false)} />
				) : (
					''
				)}
			</div>
		</article>
	);
};

export default CallModal;
