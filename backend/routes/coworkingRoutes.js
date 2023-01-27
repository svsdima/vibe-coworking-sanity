import express from 'express';
import { getCoworkings, getSingleCoworking } from '../controllers/coworkingController.js';
const router = express.Router();

router.route('/').get(getCoworkings);
router.route('/:id').get(getSingleCoworking);

export default router;
