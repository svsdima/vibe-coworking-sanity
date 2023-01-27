import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import Vacancy from './models/vacanciesModel.js';
import Coworking from './models/coworkingsModel.js';
import vacancies from './data/vacancies.js';
import coworkings from './data/coworkings.js';
import feedbacks from './data/feedbacks.js';
import News from './models/newsModel.js';
import news from './data/news.js';
import founders from './data/founders.js';
import Founder from './models/foundersModel.js';
import Booking from './models/bookingModel.js';
import booking from './data/booking.js';
import Approach from './models/approachesModel.js';
import approaches from './data/approaches.js';
import Feedback from './models/feedbackModel.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Approach.deleteMany();
		await Vacancy.deleteMany();
		await Coworking.deleteMany();
		await News.deleteMany();
		await Founder.deleteMany();
		await Booking.deleteMany();
		await Feedback.deleteMany();

		const sampleApproaches = approaches.map((approach) => {
			return { ...approach };
		});
		await Approach.insertMany(sampleApproaches);

		const sampleVacancies = vacancies.map((vacancy) => {
			return { ...vacancy };
		});
		await Vacancy.insertMany(sampleVacancies);

		const sampleCoworking = coworkings.map((coworking) => {
			return { ...coworking };
		});
		await Coworking.insertMany(sampleCoworking);

		const sampleNews = news.map((singleNews) => {
			return { ...singleNews };
		});
		await News.insertMany(sampleNews);

		const sampleFounder = founders.map((founder) => {
			return { ...founder };
		});
		await Founder.insertMany(sampleFounder);

		const sampleBooking = booking.map((book) => {
			return { ...book };
		});
		await Booking.insertMany(sampleBooking);

		const sampleFeedbacks = feedbacks.map((feedback) => {
			return { ...feedback };
		});
		await Feedback.insertMany(sampleFeedbacks);

		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Approach.deleteMany();
		await Vacancy.deleteMany();
		await Coworking.deleteMany();
		await News.deleteMany();
		await Founder.deleteMany();
		await Booking.deleteMany();
		await Feedback.deleteMany();

		console.log('Data Destroyed!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
