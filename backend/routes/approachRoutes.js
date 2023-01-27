import express from 'express';
import { getApproaches, getSingleApproach } from '../controllers/approachesController.js';
const router = express.Router();

router.route('/').get(getApproaches);
router.route('/:id').get(getSingleApproach);

export default router;
