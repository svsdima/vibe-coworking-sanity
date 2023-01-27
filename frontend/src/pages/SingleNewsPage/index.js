import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleNewsDetails } from '../../actions/newsActions';
import BtnBack from '../../components/BtnBack';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const SingleNewsPage = () => {
	const params = useParams();
	const dispatch = useDispatch();

	const singleNewsInfo = useSelector((state) => state.singleNewsInfo);
	const { loading, error, singleNews } = singleNewsInfo;

	const { text, title } = singleNews;

	useEffect(() => {
		dispatch(singleNewsDetails(params.id));
	}, [dispatch, params]);

	return (
		<div className='news-details' key={params.id}>
			<div className='container'>
				<BtnBack navigateTo={'/news'} />
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<div className='news__details__wrapper'>
						<h2 className='title'>{title}</h2>
						<p className='text'>{text}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default SingleNewsPage;
