import React from 'react';
import { advantages } from '../../constants/constants';

const Advantages = () => {
	return (
		<div className='advantages'>
			<div className='advantages__list'>
				{advantages.map(({ id, title, subtitle, text }) => (
					<div className='advantages__item item' key={id}>
						<p className='item__title'>{title}</p>
						<p className='item__subtitle'>{subtitle}</p>
						<p className='item__text'>{text}</p>
					</div>
				))}
			</div>
			<div className='advantages__text'>
				<p>И это только начало. </p>
				<p>
					В перспективе — расширение на 32 региона России и получение статуса федеральной сети
					бьюти-коворкингов.
				</p>
			</div>
		</div>
	);
};

export default Advantages;
