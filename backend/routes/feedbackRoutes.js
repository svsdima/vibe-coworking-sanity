import express from 'express';
import {
	addFeedback,
	getFeedbacks,
	getSingleFeedback,
} from '../controllers/feedbacksController.js';

const router = express.Router();

router.route('/').post(addFeedback).get(getFeedbacks);
router.route('/:id').get(getSingleFeedback);

export default router;
