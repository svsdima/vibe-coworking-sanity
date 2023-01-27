import React, { useEffect, useState } from 'react';
import BookingItem from '../BookingItem';
import { client } from '../../client';

const BookingsList = () => {
	const [showMore, setShowMore] = useState(false);

	const [booking, setBooking] = useState([]);

	useEffect(() => {
		const query = '*[_type == "booking"]';

		client.fetch(query).then((data) => {
			setBooking(data);
		});
	}, []);
	return (
		<div className='bookings__list'>
			<>
				{!showMore ? (
					<>
						{booking
							.map(
								(
									{ img, title, descr, weekdaysDay, weekdaysHour, weekendsDay, weekendsHour },
									index
								) => (
									<BookingItem
										img={img}
										title={title}
										descr={descr}
										weekdaysDay={weekdaysDay}
										weekdaysHour={weekdaysHour}
										weekendsDay={weekendsDay}
										weekendsHour={weekendsHour}
										key={index}
									/>
								)
							)
							.slice(0, 3)}
						<div className='more' onClick={() => setShowMore(true)}>
							Показать Ещё
						</div>
					</>
				) : (
					booking.map(
						(
							{ img, title, descr, weekdaysDay, weekdaysHour, weekendsDay, weekendsHour },
							index
						) => (
							<BookingItem
								img={img}
								title={title}
								descr={descr}
								weekdaysDay={weekdaysDay}
								weekdaysHour={weekdaysHour}
								weekendsDay={weekendsDay}
								weekendsHour={weekendsHour}
								key={index}
							/>
						)
					)
				)}
			</>
		</div>
	);
};

export default BookingsList;
