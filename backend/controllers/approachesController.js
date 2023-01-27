import asyncHandler from 'express-async-handler';
import Approach from '../models/approachesModel.js';

// @desc Fetch all approaches
// @route GET /api/approaches
// @access Public
const getApproaches = asyncHandler(async (req, res) => {
	const approach = await Approach.find({});

	res.json(approach);
});

// @desc Fetch single approach
// @route GET /api/approach/:id
// @access Public
const getSingleApproach = asyncHandler(async (req, res) => {
	const approach = await Approach.findById(req.params.id);

	if (approach) {
		res.json(approach);
	} else {
		res.status(404);
		throw new Error('Подход не найден');
	}
});

export { getApproaches, getSingleApproach };
