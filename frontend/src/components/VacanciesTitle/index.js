import React from 'react';
import Btn from '../Btn';

const VacanciesTitle = () => {
	return (
		<div className='vacancies-title'>
			<div className='big-container'>
				<div className='vacancies-title__bg'></div>
				<div className='vacancies-title__box'></div>
				<div className='vacancies-title__wrapper'>
					<div className='vacancies-title__info'>
						<h2 className='vacancies-title__title'>
							<span>ВАКАНСИИ:</span> <br /> БЕСПРЕРЫВНО ИЩЕМ ЛУЧШИХ
						</h2>
						<p className='vacancies-title__text'>
							Здесь собраны наши свежие вакансии. Приходите и работайте в стабильной компании в
							мегаудобном пространстве, получайте достойную оплату и возможность развиваться вместе
							с нами.
						</p>
						<Btn
							classText={'btn btn__title'}
							text={'Заполнить анкету'}
							icon={'fa-regular fa-hand-back-point-up'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VacanciesTitle;
