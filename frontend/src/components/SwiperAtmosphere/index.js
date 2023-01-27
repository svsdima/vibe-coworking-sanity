import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listApproaches } from '../../actions/approachesAction';
import Message from '../Message';
import Loader from '../Loader';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { urlFor } from '../../client';
const SwiperAtmosphere = () => {
	const dispatch = useDispatch();

	const approachesList = useSelector((state) => state.approachesList);
	const { loading, error, approaches } = approachesList;

	console.log(approaches);
	useEffect(() => {
		dispatch(listApproaches());
	}, [dispatch]);
	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div className='swiper-atmosphere'>
					<Swiper
						pagination={{
							type: 'fraction',
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
					>
						<div className='container'>
							{approaches.map(({ _id, img, description }) => (
								<SwiperSlide key={_id} className='swiper-atmosphere__item item'>
									<div className='item__img '>
										<img className='img-border' src={urlFor(img)} alt={_id} />
									</div>
									<p className='item__text'>{description}</p>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</div>
			)}
		</>
	);
};

export default SwiperAtmosphere;
