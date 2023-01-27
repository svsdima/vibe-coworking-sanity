import React from 'react';
import { urlFor } from '../../client';

const CoworkingItem = ({ id, title, img, info }) => {
	return (
		<div className='coworking__item item' key={id}>
			<div className='item__img img-border'>
				<img src={urlFor(img)} alt={title} />
			</div>
			<div className='item__info'>
				<h3 className='item__title'>{title}</h3>
				<div className='item__info__list'>
					{info.map(({ icon, description, link, _key }) => (
						<>
							{link ? (
								<div className='item__info__text' key={_key}>
									<i className={icon} />
									<a href={`tel:${link}`}>
										<span>{description}</span>
									</a>
								</div>
							) : (
								<div className='item__info__text' key={_key}>
									<i className={icon} />
									<span>{description}</span>
								</div>
							)}
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoworkingItem;
