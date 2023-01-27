import express from 'express';
import { getBooking, getSingleBook } from '../controllers/bookingController.js';
const router = express.Router();

router.route('/').get(getBooking);
router.route('/:id').get(getSingleBook);

export default router;
