import mongoose from 'mongoose';

const feedbacksSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Feedback = mongoose.model('Feedback', feedbacksSchema);

export default Feedback;
