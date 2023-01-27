import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Message';
import Loader from '../Loader';
import { listBooking } from '../../actions/bookingActions';
import BookingItem from '../BookingItem';

const BookingsList = () => {
	const [showMore, setShowMore] = useState(false);
	const dispatch = useDispatch();

	const bookingList = useSelector((state) => state.bookingList);
	const { loading, error, booking } = bookingList;

	console.log(booking);

	useEffect(() => {
		dispatch(listBooking());
	}, [dispatch]);
	return (
		<div className='bookings__list'>
			<>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
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
				)}
			</>
		</div>
	);
};

export default BookingsList;
