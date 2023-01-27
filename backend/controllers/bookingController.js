import asyncHandler from 'express-async-handler';
import Booking from '../models/bookingModel.js';

// @desc Fetch all booking
// @route GET /api/booking
// @access Public
const getBooking = asyncHandler(async (req, res) => {
	const book = await Booking.find({});

	res.json(book);
});

// @desc Fetch single book
// @route GET /api/booking/:id
// @access Public
const getSingleBook = asyncHandler(async (req, res) => {
	const book = await Booking.findById(req.params.id);

	if (book) {
		res.json(book);
	} else {
		res.status(404);
		throw new Error('Рабочее место не найдено');
	}
});

export { getBooking, getSingleBook };
