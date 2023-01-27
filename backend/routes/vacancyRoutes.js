import express from 'express';
import { getVacancies, getSingleVacancy } from '../controllers/vacanciesController.js';
const router = express.Router();

router.route('/').get(getVacancies);
router.route('/:id').get(getSingleVacancy);

export default router;
