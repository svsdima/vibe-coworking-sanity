import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listNews } from '../../actions/newsActions';
import BtnBack from '../../components/BtnBack';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const SingleNewsPage = () => {
	const params = useParams();
	const dispatch = useDispatch();

	const newsList = useSelector((state) => state.newsList);
	const { loading, error, news } = newsList;

	useEffect(() => {
		dispatch(listNews());
	}, [dispatch]);

	return (
		<div className='news-details' key={params.id}>
			<div className='container'>
				<BtnBack navigateTo={'/news'} />
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					news.map(({ _id, title, text }) => {
						if (_id === params.id) {
							return (
								<div className='news__details__wrapper'>
									<h2 className='title'>{title}</h2>
									<p className='text'>{text}</p>
								</div>
							);
						}
						return '';
					})
				)}
			</div>
		</div>
	);
};

export default SingleNewsPage;
