import React from 'react';
import { vacanciesAdvantages } from '../../constants/constants';

const VacanciesAdvantages = () => {
	return (
		<div className='vacancies-advantages va'>
			<div className='container'>
				<div className='va__wrapper'>
					<h2 className='title'>
						ПРИХОДИТЕ РАБОТАТЬ ТУДА, <span>ГДЕ УДОБНО, ИНТЕРЕСНО И ВЫГОДНО</span>
					</h2>
					<div className='va__list'>
						{vacanciesAdvantages.map(({ id, icon, text }) => (
							<div className='va__item item' key={id}>
								<div className='item__icon'>
									<img src={icon} alt={text} />
								</div>
								<p className='item__text'>{text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VacanciesAdvantages;
