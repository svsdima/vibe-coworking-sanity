import React, { useState } from 'react';
import VideoReview from '../VideoReview';

const AboutVacancies = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	return (
		<div className='about-vacancies'>
			<div className='big-container'>
				<div className='about-vacancies__wrapper'>
					<div className='about-vacancies__info'>
						<h2 className='about-vacancies__text title'>
							<span>Вакансии:</span> беспрерывно ищем лучших
						</h2>
						<p className='text'>
							Здесь собраны наши свежие вакансии. Приходите и работайте в стабильной компании в
							мегаудобном пространстве, получайте достойную оплату и возможность развиваться вместе
							с нами.
						</p>
					</div>
					<button className='about-vacancies__btn' onClick={() => setIsVideoOpen(true)}>
						<i className='fa-solid fa-play'></i>
					</button>
				</div>
			</div>
			<VideoReview open={isVideoOpen} close={() => setIsVideoOpen(false)} />
		</div>
	);
};

export default AboutVacancies;
