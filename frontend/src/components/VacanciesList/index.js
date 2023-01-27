import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listVacancies } from '../../actions/vacanciesAction';
import Btn from '../Btn';
import Categories from '../Categories';
import Loader from '../Loader';
import Message from '../Message';

const VacanciesList = () => {
	const [vacanciesItems, setVacanciesItems] = useState(null);
	const dispatch = useDispatch();

	const vacanciesList = useSelector((state) => state.vacanciesList);
	const { loading, error, vacancies } = vacanciesList;

	useEffect(() => {
		dispatch(listVacancies());
	}, [dispatch]);

	const filterVacancies = (category) => {
		const newVacanciesItems = vacancies.filter((vacancy) => vacancy.category === category);
		setVacanciesItems(newVacanciesItems);
	};

	const allCategories = [...new Set(vacancies.map((vacancy) => vacancy.category))];

	console.log(vacanciesItems, vacancies);

	return (
		<div className='container'>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div className='vacancies__menu'>
					<div className='vacancies__categories'>
						<Categories categoryies={allCategories} filterItems={filterVacancies} />
					</div>
					<div className='vacancies__list'>
						{!vacanciesItems
							? vacancies.map(({ _id, title, price }) => (
									<div className='vacancies__item item' key={_id}>
										<p className='item__title'>{title}</p>
										<p className='item__price'>от {price} руб.</p>
										<Btn classText={'btn'} text={'Откликнуться'} link={`/vacancies/${_id}`} />
									</div>
							  ))
							: vacanciesItems.map(({ _id, title, price }) => (
									<div className='vacancies__item item' key={_id}>
										<p className='item__title'>{title}</p>
										<p className='item__price'>от {price} руб.</p>
										<Btn classText={'btn'} text={'Откликнуться'} link={`/vacancies/${_id}`} />
									</div>
							  ))}
					</div>
				</div>
			)}
		</div>
	);
};

export default VacanciesList;
