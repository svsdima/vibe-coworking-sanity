import React from 'react';
import { secretSauces } from '../../constants/constants';

const SecretSauces = () => {
	return (
		<div className='secret-sauces'>
			<div className='container'>
				<div className='secret-sauces__list'>
					{secretSauces.map(({ id, icon, text }, index) => {
						const number = index + 1;
						const length = secretSauces.length;
						return (
							<div
								className={
									number % 3 === 0 || number === length
										? 'secret-sauces__item item'
										: 'secret-sauces__item item item__line'
								}
								key={id}
							>
								<div className='item__icon'>
									<img src={icon} alt={icon} />
								</div>
								<p className='item__text'>{text}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SecretSauces;
