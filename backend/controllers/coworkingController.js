import asyncHandler from 'express-async-handler';
import Coworking from '../models/coworkingsModel.js';

// @desc Fetch all coworkings
// @route GET /api/coworkings
// @access Public
const getCoworkings = asyncHandler(async (req, res) => {
	const cowork = await Coworking.find({});

	res.json(cowork);
});

// @desc Fetch single coworking
// @route GET /api/coworkings/:id
// @access Public
const getSingleCoworking = asyncHandler(async (req, res) => {
	const cowork = await Coworking.findById(req.params.id);

	if (cowork) {
		res.json(cowork);
	} else {
		res.status(404);
		throw new Error('Коворкинг не найден');
	}
});

export { getCoworkings, getSingleCoworking };
