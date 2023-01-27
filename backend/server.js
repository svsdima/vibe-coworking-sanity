import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import bookingRoutes from './routes/bookingRoutes.js';
import coworkingRoutes from './routes/coworkingRoutes.js';
import founderRoutes from './routes/founderRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import vacancyRoutes from './routes/vacancyRoutes.js';
import approachRoutes from './routes/approachRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/booking', bookingRoutes);
app.use('/api/coworkings', coworkingRoutes);
app.use('/api/founders', founderRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/vacancies', vacancyRoutes);
app.use('/api/approaches', approachRoutes);
app.use('/api/feedbacks', feedbackRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running....');
	});
}

const PORT = process.env.PORT || 7000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
