import asyncHandler from 'express-async-handler';
import Feedback from '../models/feedbackModel.js';

// @desc Fetch all feedback
// @route GET /api/feedback
// @access Public
const getFeedbacks = asyncHandler(async (req, res) => {
	const feedback = await Feedback.find({});

	res.json(feedback);
});

// @desc    Create new feedback
// @route   POST /api/feedbacks
// @access  Private
const addFeedback = asyncHandler(async (req, res) => {
	const { name, phone } = req.body;

	const feedback = await Feedback.create({
		name,
		phone,
	});
	if (feedback) {
		res.status(201).json({
			_id: feedback._id,
			name: feedback.name,
			phone: feedback.phone,
		});
	} else {
		res.status(400);
		throw new Error('Неверные данные обратной связи');
	}
});

// @desc Fetch single feedback
// @route GET /api/feedbacks/:id
// @access Public
const getSingleFeedback = asyncHandler(async (req, res) => {
	const feedback = await Feedback.findById(req.params.id);

	if (feedback) {
		res.json(feedback);
	} else {
		res.status(404);
		throw new Error('Обратная связь не найдена ');
	}
});

export { getFeedbacks, addFeedback, getSingleFeedback };
