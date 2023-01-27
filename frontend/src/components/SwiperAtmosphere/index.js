import React, { useEffect, useState } from 'react';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { client, urlFor } from '../../client';
const SwiperAtmosphere = () => {
	const [approaches, setApproaches] = useState([]);

	useEffect(() => {
		const query = '*[_type == "approaches"]';

		client.fetch(query).then((data) => {
			setApproaches(data);
			console.log(data);
		});
	}, []);
	return (
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
	);
};

export default SwiperAtmosphere;
