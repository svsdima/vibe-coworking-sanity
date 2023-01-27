import React, { useState } from 'react';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Btn from '../Btn';
import CallModal from '../CallModal';

const SwiperAbout = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div className='swiper-about'>
			<CallModal open={isOpenModal} close={() => setIsOpenModal(false)} />;
			<Swiper
				pagination={{
					type: 'fraction',
				}}
				spaceBetween={15}
				modules={[Pagination, Navigation]}
				breakpoints={{
					768: { slidesPerView: 4 },
					550: { slidesPerView: 2, spaceBetween: 10 },
					320: { slidesPerView: 1 },
				}}
			>
				<div className='container'>
					<div className='swiper-about__wrapper'>
						<SwiperSlide className='swiper-atmosphere__item item'>
							<div className='item__img '>
								<img src='/img/1.png' alt='1' />
							</div>
						</SwiperSlide>
						<SwiperSlide className='swiper-atmosphere__item item'>
							<div className='item__img '>
								<img src='/img/2.png' alt='2' />
							</div>
						</SwiperSlide>
						<SwiperSlide className='swiper-atmosphere__item item'>
							<div className='item__img '>
								<img src='/img/3.png' alt='3' />
							</div>
						</SwiperSlide>
						<SwiperSlide className='swiper-atmosphere__item item'>
							<div className='item__img '>
								<img src='/img/4.png' alt='4' />
							</div>
						</SwiperSlide>
					</div>
				</div>
			</Swiper>
			<Btn
				classText={'btn'}
				text={'Написать нам'}
				icon={'fa-regular fa-hand-back-point-up'}
				handleClick={() => setIsOpenModal(true)}
			/>
		</div>
	);
};

export default SwiperAbout;
