import express from 'express';
import { getFounders, getSingleFounder } from '../controllers/foundersController.js';
const router = express.Router();

router.route('/').get(getFounders);
router.route('/:id').get(getSingleFounder);

export default router;
