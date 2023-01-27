import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCoworkings } from '../../actions/coworkingsActions';
import Message from '../Message';
import Loader from '../Loader';
import CoworkingItem from '../CoworkingItem';

const CoworkingList = () => {
	const [showMore, setShowMore] = useState(false);
	const dispatch = useDispatch();

	const coworkingsList = useSelector((state) => state.coworkingsList);
	const { loading, error, coworkings } = coworkingsList;

	useEffect(() => {
		dispatch(listCoworkings());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div className='coworking__list'>
					{!showMore ? (
						<>
							{coworkings
								.map(({ title, img, info, _id }) => (
									<CoworkingItem title={title} img={img} info={info} id={_id} key={_id} />
								))
								.slice(0, 3)}
							<div className='more' onClick={() => setShowMore(true)}>
								Показать Ещё
							</div>
						</>
					) : (
						coworkings.map(({ title, img, info, _id }) => (
							<CoworkingItem title={title} img={img} info={info} id={_id} key={_id} />
						))
					)}
				</div>
			)}
		</>
	);
};

export default CoworkingList;
