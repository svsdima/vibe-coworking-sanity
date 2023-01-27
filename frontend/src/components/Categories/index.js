import React, { useState } from 'react';
import Btn from '../Btn';

const Categories = ({ categoryies, filterItems }) => {
	const [activeCategory, setActiveCategory] = useState('');

	return (
		<div className='btn__container'>
			{categoryies.map((category, index) => (
				<button
					className={activeCategory === category ? 'btn__category active' : 'btn__category'}
					onClick={() => {
						filterItems(category);
						setActiveCategory(category);
					}}
					key={index}
				>
					<span>{category}</span>
				</button>
			))}
		</div>
	);
};

export default Categories;
