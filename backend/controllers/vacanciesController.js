import asyncHandler from 'express-async-handler';
import Vacancy from '../models/vacanciesModel.js';

// @desc Fetch all vacancies
// @route GET /api/vacancies
// @access Public
const getVacancies = asyncHandler(async (req, res) => {
	const news = await Vacancy.find({});

	res.json(news);
});

// @desc Fetch single vacancy
// @route GET /api/vacancy/:id
// @access Public
const getSingleVacancy = asyncHandler(async (req, res) => {
	const vacancy = await Vacancy.findById(req.params.id);

	if (vacancy) {
		res.json(vacancy);
	} else {
		res.status(404);
		throw new Error('Вакансия не найдена');
	}
});

export { getVacancies, getSingleVacancy };
