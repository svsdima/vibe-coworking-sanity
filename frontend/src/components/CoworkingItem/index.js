import React from 'react';

const CoworkingItem = ({ title, img, info }) => {
	return (
		<div className='coworking__item item'>
			<div className='item__img img-border'>
				<img src={img} alt={title} />
			</div>
			<div className='item__info'>
				<h3 className='item__title'>{title}</h3>
				<div className='item__info__list'>
					{info.map(({ icon, text, link }, index) => (
						<>
							{link ? (
								<div className='item__info__text' key={index}>
									<i className={icon} />
									<a href={`tel:${link}`}>
										<span>{text}</span>
									</a>
								</div>
							) : (
								<div className='item__info__text' key={index}>
									<i className={icon} />
									<span>{text}</span>
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
