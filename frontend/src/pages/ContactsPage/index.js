import React from 'react';
import CoworkingList from '../../components/CoworkingList';
import Feedback from '../../components/Feedback';

const ContactsPage = () => {
	return (
		<section className='contacts'>
			<div className='container'>
				<div className='contacts__wrapper'>
					<h2 className='title'>
						НАШИ <span>КОНТАКТЫ</span>
					</h2>
					<div className='contacts__list'>
						<div className='contacts__item item'>
							<div className='item__call'>
								<i className='fa-solid fa-phone'></i>
								<span>Звонок бесплатный</span>
							</div>
							<a href='tel:+79806879898' className='item__link'>
								+7 (980) 687-98-98
							</a>
						</div>
						<div className='contacts__item item'>
							<div className='item__call'>
								<i className='fa-regular fa-envelope'></i>
								<span>Контактный e-mail</span>
							</div>
							<a href='mailto:booking@sircat.ru' className='item__link'>
								booking@sircat.ru
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='big-container'>
				<div className='contacts__map'></div>
			</div>
			<div className='container'>
				<h2 className='title'>
					ВСЕ НАШИ <span>КОВОРКИНГИ</span>
				</h2>
				<CoworkingList />
			</div>
			<Feedback titleText={'раздел'} spanText={'для сми'} />
		</section>
	);
};

export default ContactsPage;
