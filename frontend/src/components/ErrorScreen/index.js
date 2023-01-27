import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../Btn';

const ErrorScreen = () => {
	return (
		<section className='error-screen'>
			<div className='container'>
				<div className='error-screen__wrapper'>
					<div className='error-screen__text'>
						<h2 className='title'>Ой, что-то пошло не так...</h2>
						<p className='text'>Мы уже работаем над устранением этой проблемы</p>
						<Link to='/'>
							<Btn classText={'btn'} text={'Вернуться на главную'} />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorScreen;
