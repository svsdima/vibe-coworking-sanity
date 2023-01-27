import React from 'react';
import { aboutProfit } from '../../constants/constants';

const AboutProfit = () => {
	return (
		<div className='about-profit'>
			<div className='container'>
				<h3 className='about__title'>Что нужно сделать,чтоб уже начать зарабатывать больше: </h3>
				<div className='about-profit__list'>
					{aboutProfit.map((profit, index) => {
						const number = index + 1;
						return (
							<div
								className={`about-profit__item item item__${number}`}
								key={`about-profit ${index}`}
							>
								<h2 className='item__number'>{number < 10 ? `0${number}` : `${number}`}</h2>
								<div className='item__info'>
									<div className='item__img'>
										<img src={profit.icon} alt='profit_icon'></img>
									</div>
									<p className='item__text'>{profit.text}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AboutProfit;
