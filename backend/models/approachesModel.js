import mongoose from 'mongoose';

const approachSchema = mongoose.Schema(
	{
		img: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Approach = mongoose.model('Approach', approachSchema);

export default Approach;
