import React from 'react';
import { Link } from 'react-router-dom';

const Btn = ({ classText, text, icon, link, handleClick }) => {
	return (
		<button className={classText} onClick={handleClick}>
			{link ? (
				<Link to={link}>
					<span>
						{text} {icon ? <i className={icon}></i> : ''}
					</span>
				</Link>
			) : (
				<span>
					{text} {icon ? <i className={icon}></i> : ''}
				</span>
			)}
		</button>
	);
};

export default Btn;
