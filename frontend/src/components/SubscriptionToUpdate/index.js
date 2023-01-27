import React from 'react';
import Btn from '../Btn';

const SubscriptionToUpdate = () => {
	return (
		<article className='subscription-to-update stu'>
			<div className='big-container'>
				<div className='stu__wrapper'>
					<div className='stu__img'>
						<img src='/img/letter.png' alt='letter' />
					</div>
					<div className='stu__info'>
						<div className='stu__title'>
							Не нашли подходящую вакансию — подпишитесь на рассылку новых
						</div>
						<Btn
							classText={'btn'}
							text={'ПОДПИСАТЬСЯ НА ОБНОВЛЕНИЯ'}
							icon={'fa-regular fa-hand-back-point-up'}
						/>
					</div>
				</div>
			</div>
		</article>
	);
};

export default SubscriptionToUpdate;
