import asyncHandler from 'express-async-handler';
import Founder from '../models/foundersModel.js';

// @desc Fetch all founders
// @route GET /api/founders
// @access Public
const getFounders = asyncHandler(async (req, res) => {
	const founder = await Founder.find({});

	res.json(founder);
});

// @desc Fetch single founder
// @route GET /api/founder/:id
// @access Public
const getSingleFounder = asyncHandler(async (req, res) => {
	const founder = await Founder.findById(req.params.id);

	if (founder) {
		res.json(founder);
	} else {
		res.status(404);
		throw new Error('Основатель не найден');
	}
});

export { getFounders, getSingleFounder };
