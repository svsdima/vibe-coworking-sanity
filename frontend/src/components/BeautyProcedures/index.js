import React from 'react';
import { beautyProcedures } from '../../constants/constants';

const BeautyProcedures = () => {
	return (
		<div className='beauty-procedures'>
			<div className='container'>
				<div className='beauty-procedures__list'>
					{beautyProcedures.map((procedure, index) => {
						const number = index + 1;
						return (
							<div
								className={`beauty-procedures__item item item__${number}`}
								key={`beauty-procedures ${index}`}
							>
								<div className='item__number'>
									<div className='item__number__img'>
										<img src='/img/check-beauty.svg' alt='check-beauty'></img>
									</div>
									<h2 className='item__number__title'>
										{number < 10 ? `0${number}` : `${number}`}
									</h2>
								</div>
								<p className='item__text'>{procedure.text}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BeautyProcedures;
