import React from 'react';
import Btn from '../Btn';

const BookingItem = ({
	img,
	title,
	descr,
	weekdaysDay,
	weekdaysHour,
	weekendsDay,
	weekendsHour,
}) => {
	return (
		<div className='booking__item item'>
			<div className='item__img'>
				<img className='img-border' src={img} alt={title} />
				<Btn classText={'btn'} text={'Забронировать'} icon={'fa-regular fa-hand-back-point-up'} />
			</div>
			<div className='item__info'>
				<h3 className='item__title'>{title}</h3>
				<p className='item__descr'>{descr}</p>
				<div className='item__prices'>
					<div className='item__prices__price'>
						<h4 className='item__weekdays'>
							{weekdaysHour}
							<span>руб.</span>
						</h4>
						<h4 className='item__weekends'>
							{weekendsHour}
							<span>руб.</span>
						</h4>
						<h3>в час</h3>
					</div>
					<div className='item__prices__price'>
						<h4>
							{weekdaysDay}
							<span>руб.</span>
						</h4>
						<h4>
							{weekendsDay}
							<span>руб.</span>
						</h4>
						<h3>в час</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingItem;
