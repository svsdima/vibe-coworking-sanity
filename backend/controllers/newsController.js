import asyncHandler from 'express-async-handler';
import News from '../models/newsModel.js';

// @desc Fetch all news
// @route GET /api/news
// @access Public
const getNews = asyncHandler(async (req, res) => {
	const news = await News.find({});

	res.json(news);
});

// @desc Fetch single news
// @route GET /api/news/:id
// @access Public
const getSingleNews = asyncHandler(async (req, res) => {
	const news = await News.findById(req.params.id);

	if (news) {
		res.json(news);
	} else {
		res.status(404);
		throw new Error('Новость не найдена');
	}
});

export { getNews, getSingleNews };
