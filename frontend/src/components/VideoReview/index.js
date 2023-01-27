import React from 'react';
import { srcVideo } from '../../constants/constants';

const VideoReview = ({ open, close }) => {
	return (
		<div className={open ? 'video-review active' : 'video-review'}>
			<div className='block' onClick={close}></div>
			<div className='container'>
				<div className='video-review__wrapper'>
					<div className='video-review__close btn-close' onClick={close}>
						<span className='btn-close__left'></span>
						<span className='btn-close__right'></span>
					</div>
					<iframe
						id='video__frame'
						className='video-review__frame'
						src={open ? srcVideo : ''}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default VideoReview;
