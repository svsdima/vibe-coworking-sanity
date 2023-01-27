import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../constants/constants';

const Navbar = () => {
	return (
		<ul className='navbar'>
			{links
				.map((link) => (
					<li key={link.id}>
						<Link className='navbar__link' to={link.url}>
							{link.text}
						</Link>
					</li>
				))
				.slice(0, 4)}
		</ul>
	);
};

export default Navbar;
