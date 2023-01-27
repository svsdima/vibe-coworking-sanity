import React from 'react';
import BookingsList from '../../components/BookingsList';

const PricesPage = () => {
	return (
		<section className='prices'>
			<div className='container'>
				<div className='prices__wrapper'>
					<h2 className='title'>
						<span>ЦЕНЫ:</span> ОПТИМИЗИРОВАЛИ ВСЕ ВОЗМОЖНОЕ ДЛЯ ЛУЧШЕГО КАЧЕСТВА ПО ПРИЕМЛЕМОЙ
						СТОИМОСТИ
					</h2>
					<p className='text'>
						Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами. Поэтому
						наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
					</p>
					<BookingsList />
				</div>
			</div>
		</section>
	);
};

export default PricesPage;
