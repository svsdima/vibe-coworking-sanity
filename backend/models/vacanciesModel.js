import mongoose from 'mongoose';

const vacanciesSchema = mongoose.Schema(
	{
		category: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Vacancy = mongoose.model('Vacancy', vacanciesSchema);

export default Vacancy;
