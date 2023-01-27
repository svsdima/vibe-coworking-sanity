import express from 'express';
import { getNews, getSingleNews } from '../controllers/newsController.js';
const router = express.Router();

router.route('/').get(getNews);
router.route('/:id').get(getSingleNews);

export default router;
