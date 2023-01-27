import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNews } from '../../actions/newsActions';
import Btn from '../../components/Btn';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const NewsPage = () => {
	const dispatch = useDispatch();

	const newsList = useSelector((state) => state.newsList);
	const { loading, error, news } = newsList;

	useEffect(() => {
		dispatch(listNews());
	}, [dispatch]);

	return (
		<div className='news'>
			<div className='container'>
				<h2 className='title'>Новости</h2>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<div className='news__list'>
						{news.map(({ _id, title }) => (
							<div className='news__item item' key={_id}>
								<p className='item__title'>{title}</p>
								<Btn classText={'btn'} text={'подробнее'} link={`/news/${_id}`} />
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default NewsPage;
