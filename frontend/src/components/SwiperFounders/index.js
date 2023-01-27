import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Message';
import Loader from '../Loader';
import { listFounders } from '../../actions/foundersActions';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';
import { urlFor } from '../../client';

const SwiperFounders = () => {
	const dispatch = useDispatch();

	const foundersList = useSelector((state) => state.foundersList);
	const { loading, error, founders } = foundersList;

	useEffect(() => {
		dispatch(listFounders());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div className='swiper-founders'>
					<div className='container'>
						<div className='swiper-founders__list'>
							<Swiper
								slidesPerView={1}
								centeredSlides={true}
								slidesPerGroupSkip={1}
								grabCursor={true}
								keyboard={{
									enabled: true,
								}}
								scrollbar={true}
								modules={[Keyboard, Scrollbar, Navigation, Pagination]}
							>
								{founders.map(({ _id, name, position, img, text }) => (
									<SwiperSlide key={_id} className='swiper-founders__item item'>
										<div className='item__img img-border'>
											<img src={urlFor(img)} alt={name} />
										</div>
										<div className='item__info'>
											<p className='item__text'>&#171;{text}&#187;</p>
											<h3 className='item__name'>{name}</h3>
											<h4 className='item__position'>{position}</h4>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SwiperFounders;
